import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../services/api";

interface User {
    sub: string;
    email: string;
}

interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('@PLataforma:token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;

            api.get('/users/me')
                .then(response => {
                    setUser(response.data);
                })
                .catch(() => {
                    signOut();
                });
        }
    }, []);

    async function signIn(email: string, password: string){
        try {
            const response = await api.post('/auth/login', {email, password});
            const { access_token } = response.data;

            localStorage.setItem('@Plataforma:token', access_token);
            api.defaults.headers.Authorization = `Bearer ${access_token}`;

            const userResponse = await api.get('/users/me');
            setUser(userResponse.data);
        } catch (error) {
            console.error("Erro ao fazer login", error);
            throw error;
        }
    }

    function signOut(){
        localStorage.removeItem('@Plataforma:token');
        delete api.defaults.headers.Authorization;
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            signIn,
            signOut
        }}>
          {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const contect = useContext(AuthContext);
    return contect
}