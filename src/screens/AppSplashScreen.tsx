/**
 * Splash Screen Component
 * Minimal and creative splash screen with rotating dumbbell
 */

import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';
import { Text } from '../components/common';
import { colors, spacing } from '../theme';
import * as ExpoSplashScreen from 'expo-splash-screen';

interface SplashScreenProps {
    onFinish?: () => void;
}

// Fitness-related emojis
const fitnessEmojis = ['🏋️', '🏃', '🚴', '🏊', '🧘', '⛹️', '🤸', '🥊', '⚽'];

export const AppSplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Pick a random emoji on mount
    const [randomEmoji] = useState(() =>
        fitnessEmojis[Math.floor(Math.random() * fitnessEmojis.length)]
    );

    useEffect(() => {
        // Keep the native splash visible until we hide it manually

        // Simple fade in
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        // Continuous bounce/pulse animation
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 600,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        // Auto‑finish after 2.5 seconds
        const timer = setTimeout(() => {
            // Fade out the JS splash, then hide the native splash
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(async () => {
                await ExpoSplashScreen.hideAsync();
                if (onFinish) {
                    onFinish();
                }
            });
        }, 2500);

        return () => clearTimeout(timer);
    }, [fadeAnim, scaleAnim, onFinish]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                {/* App Logo */}
                <Image
                    source={require('../../assets/images/logo_full.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Bouncing Fitness Icon */}
                <Animated.View style={[styles.dumbbellContainer, { transform: [{ scale: scaleAnim }] }]}>
                    <Text variant="display" style={styles.dumbbell}>
                        {randomEmoji}
                    </Text>
                </Animated.View>

                {/* Tagline */}
                <Text variant="body" color={colors.text.secondary} style={styles.tagline}>
                    Track. Progress. Achieve.
                </Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 256,
        height: 256,
        marginBottom: spacing.lg,
    },
    dumbbellContainer: {
        marginVertical: spacing.lg,
    },
    dumbbell: {
        fontSize: 40,
        textAlign: 'center',
    },
    tagline: {
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: spacing.md,
    },
});
