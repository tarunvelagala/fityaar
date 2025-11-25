// src/components/home/QuickStats.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components/common/Text';
import { Card } from '@components/common/Card';
import { useTheme } from '@theme/ThemeContext';
import { spacing } from '@theme/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type StatItemProps = {
    label: string;
    value: string | number;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    color: string;
};

const StatItem: React.FC<StatItemProps> = ({ label, value, icon, color }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.statItem}>
            <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
                <MaterialCommunityIcons name={icon} size={20} color={color} />
            </View>
            <Text variant="heading" style={{ fontSize: 20, marginTop: 8 }}>{value}</Text>
            <Text variant="caption" style={{ color: colors.textSecondary }}>{label}</Text>
        </View>
    );
};

export const QuickStats = () => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <StatItem
                    label="Workouts"
                    value="3"
                    icon="dumbbell"
                    color={colors.primary}
                />
                <View style={[styles.divider, { backgroundColor: colors.border }]} />
                <StatItem
                    label="Streak"
                    value="5"
                    icon="fire"
                    color="#FF9F43"
                />
                <View style={[styles.divider, { backgroundColor: colors.border }]} />
                <StatItem
                    label="Minutes"
                    value="120"
                    icon="clock-outline"
                    color="#54A0FF"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.xl,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: 40,
    },
});
