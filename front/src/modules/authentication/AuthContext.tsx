import { createContext, useState, useContext, FC, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  setAuthState: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("authToken"));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!localStorage.getItem("authToken"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);

  const setAuthState = (newToken: string | null) => {
    setToken(newToken);
    setIsAuthenticated(!!newToken);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, setAuthState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
