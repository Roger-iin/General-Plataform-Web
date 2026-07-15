import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { AuthLoading } from "./AuthLoading";

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({children}: PrivateRouteProps) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading){
        return <AuthLoading />;
    }

    if (!isAuthenticated){
        return <Navigate to="/" replace />;
    }
    return children;
}
