// src/theme/navigationTheme.ts
import { Theme } from '@react-navigation/native';
import { useTheme } from './ThemeContext';

/**
 * Custom hook to generate the React Navigation Theme object 
 * based on the current system/user theme (light/dark).
 */
export const useNavigationTheme = (): Theme => {
    const { colors, isDark } = useTheme();

    // React Navigation requires a specific theme structure:
    const navigationTheme: Theme = {
        // 1. Base Properties
        dark: isDark,

        // 2. Color Mapping
        colors: {
            // Maps to your theme's primary background (for screens)
            background: colors.background,

            // Maps to your theme's card/surface color (for headers, tab bars)
            card: colors.card,

            // Maps to the main foreground/text color
            text: colors.textPrimary,

            // Maps to your accent color
            primary: colors.primary,

            // Maps to border color (separators, lines)
            border: colors.border,

            // Maps to notification/badge color
            notification: colors.notification,
        },
        fonts: {
            regular: {
                fontFamily: '',
                fontWeight: 'bold'
            },
            medium: {
                fontFamily: '',
                fontWeight: 'bold'
            },
            bold: {
                fontFamily: '',
                fontWeight: 'bold'
            },
            heavy: {
                fontFamily: '',
                fontWeight: 'bold'
            }
        }
    };

    return navigationTheme;
};