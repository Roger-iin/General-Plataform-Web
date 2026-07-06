import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import type { AuthContextData, User } from "../types/AuthType";
import { tokenService } from "../services/tokenService";
import { authService } from "../services/authService";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null);

    const signOut = useCallback(() => {
        tokenService.removeToken();
        tokenService.removeApiAuthorization();
        setUser(null);
    }, []);

    const loadAuthenticaredUser = useCallback(async () => {
        const token = tokenService.getToken();

        if (!token){
            return;
        }

        try {
            tokenService.setApiAuthorization(token);

            const authenticatedUser = await authService.getAuthenticatedUser();

            setUser(authenticatedUser)
        } catch {
            signOut();
        }
    }, [signOut])

    async function signUp(name: string, email: string, password: string): Promise<void> {
        try {
            await authService.signUp(name, email, password);
            await signIn(email, password);
        } catch (error) {
            console.error("Erro ao criar conta", error)
            throw error;
        }
    }

    async function signIn(email: string, password: string): Promise<void> {
        try {
            const { access_token } = await authService.signIn(email, password);

            tokenService.saveToken(access_token);
            tokenService.setApiAuthorization(access_token);

            const authemticatedUser = await authService.getAuthenticatedUser();

            setUser(authemticatedUser);
        } catch (error) {
            console.error("Erro ao fazer login", error)
            throw error;
        }
    }

    useEffect(() => {
        loadAuthenticaredUser();
    }, [loadAuthenticaredUser])

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: Boolean(user),
                signIn,
                signOut,
                signUp
            }}>
            { children }
        </AuthContext.Provider>
    );
}