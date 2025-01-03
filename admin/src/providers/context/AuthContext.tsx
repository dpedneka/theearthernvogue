"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { loginAsAdmin } from "@/api/auth";

// Define the shape of our auth context
interface AuthContextType {
  isLoading: boolean;
  isError: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface DecodedToken {
  exp: number; // Expiration time in seconds
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  // const isTokenExpired = tokenExpiry();

  const isTokenExpired = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) return true;
    const decoded = jwtDecode<DecodedToken>(token); // Decode the token with proper typing
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp < currentTime;
  };

  const loginMutation = useMutation({
    mutationFn: loginAsAdmin,
    onSuccess: (response: any) => {
      // Invalidate and refetch
      setIsAuthenticated(response.ok);
      setIsError(null);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      setIsAuthenticated(false);
      setIsError(error.message);
    },
  });

  const login = async (email: string, password: string) => {
    loginMutation.mutate({ email, password });
  };

  useEffect(() => {
    setIsAuthenticated(!isTokenExpired());
    setIsLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    redirect("/authentication/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, isLoading, isError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
