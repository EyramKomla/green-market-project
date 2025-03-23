import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
  id?: string;  // Add id property
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize with authenticated state and mock user
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>({
    email: 'demo@example.com',
    name: 'Demo User'
  });

  const login = async (email: string, password: string) => {
    // Here you would typically make an API call to authenticate
    // For now, we'll just simulate authentication
    setIsAuthenticated(true);
    setUser({ email, name: 'User' });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const signup = async (email: string, password: string, name: string) => {
    // Here you would typically make an API call to register
    // For now, we'll just simulate registration
    setIsAuthenticated(true);
    setUser({ email, name });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}