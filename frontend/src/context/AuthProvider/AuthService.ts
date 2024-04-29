import Api from "../../services/api";
import { ILoginCredentials } from "./types";

export async function login(credentials: ILoginCredentials): Promise<any> {
    return await Api.post('/auth/login', credentials);
}
