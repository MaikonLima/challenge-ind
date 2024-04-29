import { createContext, useEffect, useMemo, useState } from "react";
import { IAuthContext, IAuthProvider, ILoginCredentials, IUser } from "./types";
import { isAuthenticated, setLocalStorage } from "./utils";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { login } from "./AuthService";
import Api from "../../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser>();
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthenticated(true);
        }
        else {
            setAuthenticated(false);
        }
    }, [authenticated]);



    const { mutate: loginMutation } = useMutation(
        async (credentials: ILoginCredentials) => login(credentials),
        {
            onSuccess: (response: AxiosResponse) => {
                const user = {
                    name: response.data.name,
                    users_email: response.data.users_email,
                    profile: response.data.profile,
                    access_token: response.data.access_token,
                };

                setUser(user);
                setLocalStorage('user', user);
                setIsSuccess(true);
                setAccessToken(user.access_token);
                setAuthenticated(true);
            },
            onError: (error: any) => {
                setIsError(true);
                setError(error.response?.data.message);
            }
        }
    );

    async function logout() {
        await Api.post('auth/logout')
            .then(() => {
                toast.success("Usuário deslogado");
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message);
            });
    };


    const value = useMemo(
        () => ({
            loginMutation,
            logout,
            isAuthenticated,
            isError,
            setIsError,
            isSuccess,
            error,
            accessToken,
            authenticated,
            setAuthenticated,
        }),
        [user, isError, isSuccess, authenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}