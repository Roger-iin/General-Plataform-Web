import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({children}: PrivateRouteProps) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated){
        return <Navigate to="/" replace />;
    }
    return children;
}