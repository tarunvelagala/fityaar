// src/theme/ThemeContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors, ThemeColors } from './colors';

// Define the shape of the context
type ThemeContextType = {
    colors: ThemeColors;
    isDark: boolean;
    theme: 'light' | 'dark';
};

// Create the Context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // This hook listens to the system setting (e.g., iOS Control Center)
    const colorScheme = useColorScheme();

    const isDark = colorScheme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    const value = {
        colors,
        isDark,
        theme: colorScheme || 'light',
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Create a custom hook for easy usage
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};