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
  loading: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const AuthLoadingContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await api.get("/data/get", { withCredentials: true });
      setLoading(false);
      if (res.data) {
        setAuth(true);
        return res.data;
      }
      return null;
    } catch (error) {
      setLoading(false);
      return setAuth(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const authProviderValue = useMemo(() => ({ auth, getData, loading }), [auth, getData, loading]);

  return (
    <AuthLoadingContext.Provider value={authProviderValue}>{children}</AuthLoadingContext.Provider>
  );
}
