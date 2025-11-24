import { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "@theme/colors";
import { ThemeContext } from "@theme/ThemeContext";

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
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    );
};

