import React, { createContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";

interface todoListProps {
  id: string;
  todo: string;
}

interface dataProps {
  username: string;
  todoList: todoListProps[];
}

interface AuthContextData {
  auth: boolean;
  getData(): Promise<dataProps>;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState(false);

  const getData = async () => {
    try {
      const res = await api.get("/data/get", { withCredentials: true });
      if (res.data) {
        setAuth(true);
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
    return setAuth(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const authProviderValue = useMemo(() => ({ auth, getData }), [auth, getData]);

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>;
}
