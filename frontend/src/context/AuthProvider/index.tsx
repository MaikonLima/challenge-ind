import { AxiosResponse } from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { IAuthContext, IAuthProvider, ILoginCredentials, IUser } from './types';
import { isAuthenticated } from './utils';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { login, logout } from './services';
import { setLocalStorage } from '../utils/local-storage.util';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser>();
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
                    email: response.data.email,
                    profile: response.data.profile,
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token
                };


                setUser(user);
                setLocalStorage('user', user);
                setAccessToken(user.access_token);
                setAuthenticated(true);
            },
            onError: (error: any) => {
                toast.error(error.response?.data.message);
            }
        }
    );

    const handleLogout = () => {
        localStorage.clear();
        localStorage.setItem("is_logged_in", "false");
    };

    async function Logout() {
        await api.post('auth/logout').then(() => {
            handleLogout();
        }).catch((error) => { toast.error(error?.response?.data?.message); });


    };

    const value = useMemo(
        () => ({
            loginMutation,
            logout,
            Logout,
            isAuthenticated,
            accessToken,
            authenticated,
            setAuthenticated,
        }),
        [user, authenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}