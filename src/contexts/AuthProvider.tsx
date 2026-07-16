import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { User } from "../types/AuthType";
import { authService } from "../services/authService";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const signOut = useCallback(async () => {
        try {
            await authService.signOut();
        } finally {
            setUser(null);
        }
    }, []);

    const loadAuthenticatedUser = useCallback(async () => {
        try {
            const authenticatedUser = await authService.getAuthenticatedUser();

            setUser(authenticatedUser)
        } catch {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, [])

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
            await authService.signIn(email, password);

            const authenticatedUser = await authService.getAuthenticatedUser();

            setUser(authenticatedUser);
        } catch (error) {
            setUser(null);
            console.error("Erro ao fazer login", error)
            throw error;
        }
    }

    useEffect(() => {
        void loadAuthenticatedUser();
    }, [loadAuthenticatedUser])

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: Boolean(user),
                signIn,
                signOut,
                signUp
            }}>
            { children }
        </AuthContext.Provider>
    );
}
