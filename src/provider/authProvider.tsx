import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    isLoggedOut: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    Logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const login = async (email: string, password: string): Promise<boolean> => {
        if (email.trim() === 'ank@ank.com' && password === 'ank@ank.com') {
            setIsloggedIn(true);
            setIsLoggedOut(false);
            return true;
        }
        return false;
    };

    const Logout = async () => {
        setIsloggedIn(false);
        setIsLoggedOut(true);
    };

    const authInfo: AuthContextType = {
        isLoggedIn,
        isLoggedOut,
        login,
        Logout,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
