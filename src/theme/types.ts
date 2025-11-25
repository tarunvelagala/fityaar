import { ThemeColors } from "@theme/colors";

// Define the shape of the context
export type ThemeContextType = {
    colors: ThemeColors;
    isDark: boolean;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};