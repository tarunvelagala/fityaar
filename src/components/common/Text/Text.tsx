// src/components/common/Text/Text.tsx

import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { typography } from '@theme/constants';

export type TextVariant = 'display' | 'heading' | 'subheading' | 'body' | 'caption';

export interface TextProps extends RNTextProps {
    /**
     * Typography variant
     * @default 'body'
     */
    variant?: TextVariant;

    /**
     * Text color override
     */
    color?: string;

    /**
     * Whether to use secondary text color
     * @default false
     */
    secondary?: boolean;
}

/**
 * Theme-aware Text component with typography variants
 * 
 * @example
 * ```tsx
 * <Text variant="heading">Welcome to FitYaar</Text>
 * <Text variant="body" secondary>Track your workouts</Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({
    variant = 'body',
    color,
    secondary = false,
    style,
    children,
    ...rest
}) => {
    const { colors } = useTheme();

    const getVariantStyle = (variant: TextVariant) => {
        return typography[variant];
    };

    const textColor = color || (secondary ? colors.textSecondary : colors.textPrimary);

    return (
        <RNText
            style={[
                getVariantStyle(variant),
                { color: textColor },
                style,
            ]}
            {...rest}
        >
            {children}
        </RNText>
    );
};
