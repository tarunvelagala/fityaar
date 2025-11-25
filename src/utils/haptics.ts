// src/utils/haptics.ts
// Haptic feedback helpers using expo-haptics

import * as Haptics from 'expo-haptics';

/**
 * Light impact feedback - for subtle interactions like button taps
 */
export const lightImpact = async () => {
    try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
        // Haptics may not be available on all devices
        console.debug('Haptic feedback not available:', error);
    }
};

/**
 * Medium impact feedback - for standard interactions
 */
export const mediumImpact = async () => {
    try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
        console.debug('Haptic feedback not available:', error);
    }
};

/**
 * Heavy impact feedback - for important actions
 */
export const heavyImpact = async () => {
    try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    } catch (error) {
        console.debug('Haptic feedback not available:', error);
    }
};

/**
 * Selection changed feedback - for picker/slider interactions
 */
export const selectionChanged = async () => {
    try {
        await Haptics.selectionAsync();
    } catch (error) {
        console.debug('Haptic feedback not available:', error);
    }
};

/**
 * Success notification feedback
 */
export const notificationSuccess = async () => {
    try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
        console.debug('Haptic feedback not available:', error);
    }
};

/**
 * Warning notification feedback
 */
export const notificationWarning = async () => {
    try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } catch (error) {
        console.debug('Haptic feedback not available:', error);
    }
};

/**
 * Error notification feedback
 */
export const notificationError = async () => {
    try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    } catch (error) {
        console.debug('Haptic feedback not available:', error);
    }
};
