export interface User {
    sub: string;
    email: string;
}

export interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

export interface SignInResponse {
    access_token: string;
}