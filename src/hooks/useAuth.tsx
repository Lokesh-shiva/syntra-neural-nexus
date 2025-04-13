import React, { createContext, useContext, useEffect, useState } from 'react';

// Mock user data
const mockUser = {
  id: 'demo-user-id',
  email: 'demo@orbynet.ai',
  name: 'Demo User',
  created_at: new Date().toISOString(),
};

type User = typeof mockUser | null;

interface AuthContextType {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, metadata?: Record<string, any>) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('orbynet_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('orbynet_user');
      }
    }
    setLoading(false);
  }, []);

  // Mock sign in function
  const signIn = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real app, we would verify credentials here
    // For now, just simulate successful login with mock user
    localStorage.setItem('orbynet_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  // Mock sign up function
  const signUp = async (email: string, password: string, metadata?: Record<string, any>) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, we would create a new user here
    // For now, just simulate successful signup with mock user
    const newUser = {
      ...mockUser,
      email,
      name: metadata?.name || 'Demo User',
    };
    
    localStorage.setItem('orbynet_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  // Mock sign out function
  const signOut = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    localStorage.removeItem('orbynet_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
