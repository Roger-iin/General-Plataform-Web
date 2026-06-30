import type { SignInResponse, User } from "../types/AuthType";
import { api } from "./api";

export const authService = {
    async signIn(email: string, password: string): Promise<SignInResponse> {
        const response = await api.post<SignInResponse>("/auth/login", {
            email,
            password
        });

        return response.data;
    },

    async getAuthenticatedUser(): Promise<User>{
        const response = await api.get<User>("/users/me")

        return response.data;
    }
}