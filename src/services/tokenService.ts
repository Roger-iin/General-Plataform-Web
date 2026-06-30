import { AUTH_STORAGE_KEYS } from "../constants/AuthStorageConstants"
import { api } from "./api";

export const tokenService = {
    getToken(): string | null{
        return localStorage.getItem(AUTH_STORAGE_KEYS.token);
    },

    saveToken(token: string): void {
        localStorage.setItem(AUTH_STORAGE_KEYS.token, token);
    },

    removeToken(): void {
        localStorage.removeItem(AUTH_STORAGE_KEYS.token);
    },

    setApiAuthorization(token: string): void{
        api.defaults.headers.Authorization = `Bearer ${token}`;
    },

    removeApiAuthorization(): void {
        delete api.defaults.headers.Authorization;
    },
};