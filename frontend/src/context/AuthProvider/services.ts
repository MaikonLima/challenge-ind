import api from "../../services/api";
import { ILoginCredentials } from "./types";

export async function login(credentials: ILoginCredentials): Promise<any> {
    return await api.post('/auth/login', credentials);
}

export async function logout(): Promise<any> {
    return await api.post('/auth/logout');
}

export async function refreshToken(refresh_token: string): Promise<any> {
    return await api.post('/auth/refresh_token', {}, {
        headers: {
            'Authorization': `Bearer ${refresh_token}`
        }
    });
}