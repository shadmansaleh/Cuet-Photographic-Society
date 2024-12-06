import { createContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import Axios from "axios";
import Cookies from "js-cookie";

export interface AuthData {
  role: string | null;
}

export type AuthCtxType = {
  token: string;
} & AuthData;

interface AuthContextProps {
  auth: AuthCtxType | null;
  setAuth: ((auth: AuthCtxType) => void) | null;
  clearAuth: (() => void) | null;
}

export const AuthContext = createContext<AuthContextProps>({
  auth: null,
  setAuth: null,
  clearAuth: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useLocalStorage("sessionData");

  if (session?.role === null) Cookies.remove("token", { path: "/" });

  const authorize = ({ token, role }: AuthCtxType) => {
    setSession({ role });
    Cookies.set("token", token, { path: "/" });
  };

  const clearAuth = () => {
    const axios = Axios.create({
      baseURL: __BACKEND_URL__,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    axios.delete("/auth/logout").catch(console.error);
    setSession({ role: null });
    Cookies.remove("token", { path: "/" });
  };

  return (
    <AuthContext.Provider
      value={{ auth: session, setAuth: authorize, clearAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
