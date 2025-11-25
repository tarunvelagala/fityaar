// src/components/home/HomeHeader.tsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '@components/common/Text';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius } from '@theme/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WeeklyProgress } from './WeeklyProgress';

type HomeHeaderProps = {
    userName?: string;
};

export const HomeHeader: React.FC<HomeHeaderProps> = ({ userName = 'Guest' }) => {
    const { colors } = useTheme();

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    const getDateString = () => {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        }).toUpperCase();
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text
                    variant="caption"
                    style={{
                        color: colors.textSecondary,
                        fontWeight: '600',
                        letterSpacing: 1,
                        marginBottom: 4
                    }}
                >
                    {getDateString()}
                </Text>
                <Text variant="display" style={{ color: colors.textPrimary, fontSize: 32 }}>
                    Hi, {userName}
                </Text>
                <WeeklyProgress />
            </View>

            <View style={[styles.avatarContainer, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
                <MaterialCommunityIcons name="account" size={24} color={colors.textPrimary} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Changed to flex-start for better alignment with graph
        marginBottom: spacing.xl,
        marginTop: spacing.sm,
    },
    textContainer: {
        flex: 1,
    },
    avatarContainer: {
        width: 44,
        height: 44,
        borderRadius: borderRadius.circular,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: spacing.md,
        marginTop: 8, // Align avatar with text
    },
});
