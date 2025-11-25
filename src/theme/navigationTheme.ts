// src/theme/navigationTheme.ts

import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { ThemeColors } from './colors';

export const getNavigationTheme = (colors: ThemeColors, isDark: boolean): Theme => {
    const BaseTheme = isDark ? DarkTheme : DefaultTheme;

    return {
        ...BaseTheme,
        colors: {
            ...BaseTheme.colors,
            primary: colors.primary,
            background: colors.background,
            card: colors.card,
            text: colors.textPrimary,
            border: colors.border,
            notification: colors.error,
        },
    };
};
