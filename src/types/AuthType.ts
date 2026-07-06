export interface User {
    sub: string;
    email: string;
}

export interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    signUp: (name: string, email: string, password: string) => Promise<void>;
}

export interface signUpResponse{
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string
}

export interface SignInResponse {
    access_token: string;
}