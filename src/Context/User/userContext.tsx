// context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

// Define types for context
interface UserContextType {
    token: string | null;
    role: string | null;
    setToken: (token: string) => void;
    setRole: (role: string) => void;
}

// Create the context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook for accessing user context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

// UserProvider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [cookies, setCookie] = useCookies(['token']);

    // When the component mounts, check if the token is in cookies and decode it
    useEffect(() => {
        const storedToken = cookies.token;
        if (storedToken) {
            setToken(storedToken);

            // Decode the JWT to get the role
            const decodedToken: { role?: string } = jwtDecode(storedToken);
            if (decodedToken && decodedToken.role) {
                setRole(decodedToken.role);
            }
        }
    }, [cookies]);

    // Function to handle setting the token and role
    const updateToken = (newToken: string) => {
        setToken(newToken);
        setCookie('token', newToken, { path: '/' });

        // Decode and set role
        const decodedToken: { role?: string } = jwtDecode(newToken);
        if (decodedToken && decodedToken.role) {
            setRole(decodedToken.role);
        }
    };

    return (
        <UserContext.Provider value={{ token, role, setToken: updateToken, setRole }}>
            {children}
        </UserContext.Provider>
    );
};
