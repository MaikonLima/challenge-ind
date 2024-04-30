import { Dispatch, SetStateAction } from 'react';

export interface IUser {
    name: string;
    profile: string;
    access_token: string;
    first_access: string;
    refresh_token: string;
}

export interface ILoginCredentials {
    username: string;
    password: string;
}

export interface IAuthContext {
    loginMutation: (credentials: ILoginCredentials) => any;
    logout: () => void;
    Logout: () => void;
    isAuthenticated: () => boolean;
    authenticated: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
    accessToken?: string | undefined;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IJwtPayload {
    sub: number;
    name: string;
    username: string;
    profile: string[];
    iat: number;
    exp: number;
}
