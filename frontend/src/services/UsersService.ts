import Api from "./api";

export interface IGetUser {
    user_id: number,
    users_status: boolean,
    users_name: string,
    users_surname: string,
    users_email: string,
    users_access_level: number,
    users_create_date: Date
}

export const getUser = async (user_id: number | undefined) => {
    const request = await Api.get(`users/${user_id}`);
    return request.data;
}

export const getUserId = async (id: number) => {
    return Api.get(`users/${id}`);
};

export const deleteUser = async (id: number) => {
    return Api.delete(`users/delete/${id}`);
};
