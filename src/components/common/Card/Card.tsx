// src/components/common/Card/Card.tsx

import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius as defaultBorderRadius, shadows } from '@theme/constants';
import { createPressAnimation } from '@theme/animations';
import { lightImpact } from '@utils/haptics';
import { CardProps, CardVariant, CardPadding } from './Card.types';

/**
 * Card component with pastel variants and optional press interactions
 * 
 * @example
 * ```tsx
 * <Card variant="pastel-blue" padding="medium">
 *   <Text>Card content</Text>
 * </Card>
 * 
 * <Card variant="pastel-green" onPress={() => console.log('Pressed')}>
 *   <Text>Interactive card</Text>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
    variant = 'default',
    padding = 'medium',
    borderRadius = defaultBorderRadius.large,
    onPress,
    disabled = false,
    shadow = false,
    style,
    children,
}) => {
    const { colors } = useTheme();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Get background color based on variant
    const getBackgroundColor = (variant: CardVariant): string => {
        const pastelColors = {
            'default': colors.card,
            'pastel-blue': '#D4E7F7',
            'pastel-beige': '#F5EFE7',
            'pastel-green': '#E3F5E8',
            'pastel-yellow': '#FFF9E3',
            'pastel-pink': '#FFE8F0',
            'pastel-purple': '#EDE7F6',
        };
        return pastelColors[variant];
    };

    // Get padding value
    const getPaddingValue = (padding: CardPadding): number => {
        const paddingMap = {
            none: 0,
            small: spacing.md,
            medium: spacing.xl,
            large: spacing.xxl,
        };
        return paddingMap[padding];
    };

    const backgroundColor = getBackgroundColor(variant);
    const paddingValue = getPaddingValue(padding);

    // Create press animations
    const { pressIn, pressOut } = createPressAnimation(scaleAnim);

    const handlePressIn = () => {
        if (!disabled && onPress) {
            pressIn();
            lightImpact();
        }
    };

    const handlePressOut = () => {
        if (!disabled && onPress) {
            pressOut();
        }
    };

    const handlePress = () => {
        if (!disabled && onPress) {
            onPress();
        }
    };

    const cardStyle = [
        styles.card,
        {
            backgroundColor,
            borderRadius,
            padding: paddingValue,
        },
        shadow && shadows.small,
        style,
    ];

    // If interactive, wrap in Pressable with animation
    if (onPress) {
        return (
            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={handlePress}
                disabled={disabled}
                style={({ pressed }) => [
                    disabled && styles.disabled,
                ]}
            >
                <Animated.View
                    style={[
                        cardStyle,
                        {
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                >
                    {children}
                </Animated.View>
            </Pressable>
        );
    }

    // Static card
    return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
    },
    disabled: {
        opacity: 0.5,
    },
});
