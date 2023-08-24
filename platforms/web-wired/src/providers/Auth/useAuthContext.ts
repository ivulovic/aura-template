import { useContext } from "react";
import AuthContext from "./context";

export default function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("You are using `useAuth` outside of AuthProvider.");
  }

  return ctx;
}
