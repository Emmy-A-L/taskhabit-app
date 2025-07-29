import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from 'react';
import type { User } from "../types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // TODO: Implement actual auth check
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Implement actual login logic
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email,
        memberSince: new Date(),
        role: "doer",
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // TODO: Implement actual logout logic
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      // TODO: Implement actual signup logic
      const mockUser: User = {
        id: "1",
        name,
        email,
        memberSince: new Date(),
        role: "both",
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
