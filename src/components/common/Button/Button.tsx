// src/components/common/Button/Button.tsx

import React, { useRef } from 'react';
import {
    Animated,
    Pressable,
    StyleSheet,
    Text,
    ActivityIndicator,
    View,
} from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius, touchTarget, typography } from '@theme/constants';
import { createPressAnimation } from '@theme/animations';
import { lightImpact } from '@utils/haptics';
import { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';

/**
 * Button component with multiple variants and states
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onPress={() => console.log('Pressed')}>
 *   Start Workout
 * </Button>
 * 
 * <Button variant="secondary" loading>
 *   Loading...
 * </Button>
 * 
 * <Button variant="icon" icon={<Icon name="plus" />} onPress={handleAdd} />
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    onPress,
    disabled = false,
    loading = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    children,
    style,
    textStyle,
}) => {
    const { colors, isDark } = useTheme();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Create press animations
    const { pressIn, pressOut } = createPressAnimation(scaleAnim);

    const handlePressIn = () => {
        if (!disabled && !loading) {
            pressIn();
            lightImpact();
        }
    };

    const handlePressOut = () => {
        if (!disabled && !loading) {
            pressOut();
        }
    };

    const handlePress = () => {
        if (!disabled && !loading) {
            onPress();
        }
    };

    // Get button dimensions based on size
    const getButtonSize = (size: ButtonSize, variant: ButtonVariant) => {
        if (variant === 'icon') {
            return {
                small: { width: touchTarget.minimum, height: touchTarget.minimum },
                medium: { width: touchTarget.comfortable, height: touchTarget.comfortable },
                large: { width: touchTarget.large, height: touchTarget.large },
            }[size];
        }

        return {
            small: { height: 36, paddingHorizontal: spacing.lg },
            medium: { height: touchTarget.comfortable, paddingHorizontal: spacing.xl },
            large: { height: touchTarget.large, paddingHorizontal: spacing.xxl },
        }[size];
    };

    // Get text size based on button size
    const getTextSize = (size: ButtonSize) => {
        return {
            small: { fontSize: 14, lineHeight: 18 },
            medium: { fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight },
            large: { fontSize: 18, lineHeight: 24 },
        }[size];
    };

    const buttonSize = getButtonSize(size, variant);
    const textSize = getTextSize(size);

    // Get button styles based on variant
    const getVariantStyles = (variant: ButtonVariant) => {
        switch (variant) {
            case 'primary':
                return {
                    container: {
                        backgroundColor: colors.textPrimary, // Black (light) / White (dark)
                        borderRadius: borderRadius.medium,
                    },
                    text: {
                        color: isDark ? '#000000' : '#FFFFFF', // Invert text color for contrast
                        fontWeight: '600' as const,
                    },
                };
            case 'secondary':
                return {
                    container: {
                        backgroundColor: colors.card,
                        borderWidth: 2,
                        borderColor: colors.primary, // Green border (brand accent)
                        borderRadius: borderRadius.medium,
                    },
                    text: {
                        color: colors.primary, // Green text (brand accent)
                        fontWeight: '600' as const,
                    },
                };
            case 'text':
                return {
                    container: {
                        backgroundColor: 'transparent',
                    },
                    text: {
                        color: colors.primary, // Green text (brand accent)
                        fontWeight: '600' as const,
                    },
                };
            case 'icon':
                return {
                    container: {
                        backgroundColor: colors.primary, // Green background (brand accent)
                        borderRadius: borderRadius.circular,
                        justifyContent: 'center' as const,
                        alignItems: 'center' as const,
                    },
                    text: {
                        color: colors.card,
                    },
                };
        }
    };

    const variantStyles = getVariantStyles(variant);

    const containerStyle = [
        styles.container,
        buttonSize,
        variantStyles.container,
        fullWidth && styles.fullWidth,
        (disabled || loading) && styles.disabled,
        style,
    ];

    const textStyles = [
        styles.text,
        textSize,
        variantStyles.text,
        textStyle,
    ];

    const renderContent = () => {
        if (loading) {
            return (
                <ActivityIndicator
                    color={variant === 'primary' || variant === 'icon' ? colors.card : colors.textPrimary}
                    size="small"
                />
            );
        }

        if (variant === 'icon') {
            return icon;
        }

        if (icon && children) {
            return (
                <View style={styles.contentWithIcon}>
                    {iconPosition === 'left' && <View style={styles.iconLeft}>{icon}</View>}
                    <Text style={textStyles}>{children}</Text>
                    {iconPosition === 'right' && <View style={styles.iconRight}>{icon}</View>}
                </View>
            );
        }

        return <Text style={textStyles}>{children}</Text>;
    };

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            disabled={disabled || loading}
        >
            <Animated.View
                style={[
                    containerStyle,
                    {
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                {renderContent()}
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullWidth: {
        width: '100%',
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        textAlign: 'center',
    },
    contentWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconLeft: {
        marginRight: spacing.sm,
    },
    iconRight: {
        marginLeft: spacing.sm,
    },
});
