export interface User {
    sub: string;
    email: string;
}

export interface AuthContextData {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    signUp: (name: string, email: string, password: string) => Promise<void>;
}

export interface SignUpResponse{
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string
}

export interface SignInResponse {
    authenticated: boolean;
}
