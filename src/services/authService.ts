import type { SignInResponse, SignUpResponse, User } from "../types/AuthType";
import { api } from "./api";

export const authService = {
    async signUp(name: string, email: string, password: string): Promise<SignUpResponse>{
        const response = await api.post("/users", {
            name, 
            email,
            password
        });
        return response.data
    },

    async signIn(email: string, password: string): Promise<SignInResponse> {
        const response = await api.post<SignInResponse>("/auth/login", {
            email,
            password
        });

        return response.data;
    },

    async signOut(): Promise<void> {
        await api.post('/auth/logout');
    },

    async getAuthenticatedUser(): Promise<User>{
        const response = await api.get<User>("/users/me")

        return response.data;
    }
}