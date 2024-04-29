import { Dispatch, SetStateAction } from "react";

export interface IUser {
    name: string;
    profile: string;
    access_token: string;
}

export interface ILoginCredentials {
    username: string;
    password: string;
}


export interface IAuthContext {
    loginMutation: (credentials: ILoginCredentials) => any;
    logout: () => void;
    isAuthenticated: () => boolean;
    authenticated: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
    isSuccess: boolean;
    error: string;
    accessToken?: string | undefined;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IJwtPayload {
    sub: number;
    name: string;
    email: string,
    iat: number;
    exp: number;
  }
