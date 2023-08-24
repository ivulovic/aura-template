import { createContext } from "react";
import { AuthContext } from "./types";

const AuthContext = createContext<AuthContext | null>(null);

export default AuthContext;
