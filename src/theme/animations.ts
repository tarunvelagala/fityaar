// src/theme/animations.ts
// Reusable animation utilities for consistent micro-interactions

import { Animated, Easing } from 'react-native';
import { animationDuration, pressScale } from '@theme/constants';

/**
 * Creates a press animation that scales down the element
 * @param animatedValue - The animated value to control
 * @param scale - Target scale (default: 0.96)
 * @param duration - Animation duration in ms
 */
export const createPressAnimation = (
    animatedValue: Animated.Value,
    scale: number = pressScale,
    duration: number = animationDuration.fast
) => {
    return {
        pressIn: () => {
            Animated.spring(animatedValue, {
                toValue: scale,
                useNativeDriver: true,
                friction: 8,
                tension: 100,
            }).start();
        },
        pressOut: () => {
            Animated.spring(animatedValue, {
                toValue: 1,
                useNativeDriver: true,
                friction: 8,
                tension: 100,
            }).start();
        },
    };
};

/**
 * Creates a fade animation
 * @param animatedValue - The animated value to control
 * @param toValue - Target opacity (0 or 1)
 * @param duration - Animation duration in ms
 */
export const createFadeAnimation = (
    animatedValue: Animated.Value,
    toValue: number,
    duration: number = animationDuration.normal
) => {
    return Animated.timing(animatedValue, {
        toValue,
        duration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
    });
};

/**
 * Creates a slide animation
 * @param animatedValue - The animated value to control
 * @param toValue - Target position
 * @param duration - Animation duration in ms
 */
export const createSlideAnimation = (
    animatedValue: Animated.Value,
    toValue: number,
    duration: number = animationDuration.normal
) => {
    return Animated.timing(animatedValue, {
        toValue,
        duration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
    });
};

/**
 * Creates a spring animation for bouncy effects
 * @param animatedValue - The animated value to control
 * @param toValue - Target value
 */
export const createSpringAnimation = (
    animatedValue: Animated.Value,
    toValue: number
) => {
    return Animated.spring(animatedValue, {
        toValue,
        useNativeDriver: true,
        friction: 7,
        tension: 40,
    });
};

/**
 * Fade in animation preset
 */
export const fadeIn = (
    animatedValue: Animated.Value,
    duration?: number
) => {
    animatedValue.setValue(0);
    return createFadeAnimation(animatedValue, 1, duration);
};

/**
 * Fade out animation preset
 */
export const fadeOut = (
    animatedValue: Animated.Value,
    duration?: number
) => {
    return createFadeAnimation(animatedValue, 0, duration);
};

/**
 * Slide up animation preset (for bottom sheets)
 */
export const slideUp = (
    animatedValue: Animated.Value,
    fromValue: number,
    duration?: number
) => {
    animatedValue.setValue(fromValue);
    return createSlideAnimation(animatedValue, 0, duration);
};

/**
 * Slide down animation preset
 */
export const slideDown = (
    animatedValue: Animated.Value,
    toValue: number,
    duration?: number
) => {
    return createSlideAnimation(animatedValue, toValue, duration);
};
