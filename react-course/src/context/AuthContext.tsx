import React, { useState, createContext, useContext, ReactNode } from 'react';

interface UserData {
  token: string;
}

interface AuthContextType {
  currentUser: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);

    const login = (userData: UserData) => {
        setCurrentUser(userData);
        localStorage.setItem('token', userData.token);
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
