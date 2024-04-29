import jwtDecode from "jwt-decode";
import { IJwtPayload, IUser } from "./types";

export function isAuthenticated(): boolean {
    const user = getLocalStorage<IUser>('user');

    if (user && user?.access_token) {
        const decodedJwt: IJwtPayload = jwtDecode(user.access_token);

        if ((decodedJwt.exp * 1000) > Date.now()) {
            return true;
        }
    }

    return false;
}


import { Dispatch, SetStateAction } from "react";

export function getLocalStorage<T>(key: string): T | undefined {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
        return JSON.parse(storageValue);
    }
}

export function setLocalStorage<T>(key: string, value: T) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function localStorageObservable(key: string, value: any, setState: Dispatch<SetStateAction<any>>) {
    return window.addEventListener('storage', (event) => {
        if (event.key === key && event.oldValue === JSON.stringify(value)) {
            setState(true);
        }
    });
}

export function removeLocalStorage(key: string) {
    return localStorage.removeItem(key);
}

