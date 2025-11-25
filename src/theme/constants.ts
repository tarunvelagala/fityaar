// src/theme/constants.ts
// Design tokens for the FitYaar iOS-inspired design system

/**
 * Spacing scale - multiples of 4 for consistent rhythm
 */
export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    huge: 40,
    massive: 48,
} as const;

/**
 * Border radius values for different component types
 */
export const borderRadius = {
    small: 8,
    medium: 12,
    large: 20,
    xlarge: 24,
    circular: 999,
} as const;

/**
 * Animation durations in milliseconds
 */
export const animationDuration = {
    fast: 150,
    normal: 250,
    slow: 350,
} as const;

/**
 * Animation easing curves (iOS-inspired)
 */
export const animationEasing = {
    // Standard iOS easing
    standard: [0.4, 0.0, 0.2, 1] as const,
    // Deceleration (ease-out)
    decelerate: [0.0, 0.0, 0.2, 1] as const,
    // Acceleration (ease-in)
    accelerate: [0.4, 0.0, 1, 1] as const,
    // Sharp (for exiting elements)
    sharp: [0.4, 0.0, 0.6, 1] as const,
} as const;

/**
 * Typography scale matching plan.md specifications
 */
export const typography = {
    display: {
        fontSize: 42,
        lineHeight: 52,
        fontWeight: '700' as const,
        letterSpacing: -0.5,
    },
    heading: {
        fontSize: 30,
        lineHeight: 38,
        fontWeight: '700' as const,
        letterSpacing: -0.3,
    },
    subheading: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '600' as const,
        letterSpacing: 0,
    },
    body: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '400' as const,
        letterSpacing: 0,
    },
    caption: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400' as const,
        letterSpacing: 0,
    },
} as const;

/**
 * Touch target sizes for accessibility
 */
export const touchTarget = {
    minimum: 44,
    comfortable: 48,
    large: 56,
} as const;

/**
 * Shadow configurations (optional, for when shadows are needed)
 */
export const shadows = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,
    },
} as const;

/**
 * Opacity values for different states
 */
export const opacity = {
    disabled: 0.5,
    pressed: 0.7,
    overlay: 0.4,
} as const;

/**
 * Press animation scale value
 */
export const pressScale = 0.96;
