import { createContext } from "react";
import type { AuthContextData } from "../types/AuthType";

export const AuthContext = createContext<AuthContextData | null>(null);