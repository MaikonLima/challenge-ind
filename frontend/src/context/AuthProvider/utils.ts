import jwtDecode from "jwt-decode";
import { IJwtPayload, IUser } from "./types";
import { getLocalStorage } from "../utils/local-storage.util";

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
