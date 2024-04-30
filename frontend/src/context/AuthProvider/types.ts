import { Dispatch, SetStateAction } from 'react';

export interface IUser {
    email: string;
    profile: string;
    access_token: string;
    refresh_token: string;
}

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface IAuthContext {
    loginMutation: (credentials: ILoginCredentials) => any;
    logout: () => void;
    Logout: () => void;
    isAuthenticated: () => boolean;
    authenticated: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
    access_token?: string | undefined;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IJwtPayload {
    sub: number;
    name: string;
    email: string;
    profile: string[];
    iat: number;
    exp: number;
}
