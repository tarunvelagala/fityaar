// src/components/home/RecentActivity.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@components/common/Text';
import { Card } from '@components/common/Card';
import { useTheme } from '@theme/ThemeContext';
import { spacing } from '@theme/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ActivityItemProps = {
    title: string;
    date: string;
    duration: string;
    exercises: number;
    variant: 'pastel-blue' | 'pastel-green' | 'pastel-purple';
};

const ActivityItem: React.FC<ActivityItemProps> = ({ title, date, duration, exercises, variant }) => {
    const { colors } = useTheme();

    return (
        <Card variant={variant} padding="medium" style={styles.card} onPress={() => { }}>
            <View style={styles.cardHeader}>
                <Text variant="subheading">{title}</Text>
                <Text variant="caption" style={{ opacity: 0.7 }}>{date}</Text>
            </View>

            <View style={styles.cardStats}>
                <View style={styles.stat}>
                    <MaterialCommunityIcons name="clock-outline" size={16} color={colors.textPrimary} style={{ opacity: 0.6 }} />
                    <Text variant="body" style={{ marginLeft: 4, fontSize: 14 }}>{duration}</Text>
                </View>
                <View style={[styles.stat, { marginLeft: 16 }]}>
                    <MaterialCommunityIcons name="dumbbell" size={16} color={colors.textPrimary} style={{ opacity: 0.6 }} />
                    <Text variant="body" style={{ marginLeft: 4, fontSize: 14 }}>{exercises} Exercises</Text>
                </View>
            </View>
        </Card>
    );
};

export const RecentActivity = () => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text variant="subheading">Recent Activity</Text>
                <TouchableOpacity>
                    <Text variant="body" style={{ color: colors.primary, fontWeight: '600' }}>See All</Text>
                </TouchableOpacity>
            </View>

            <ActivityItem
                title="Upper Body Power"
                date="Yesterday"
                duration="45 min"
                exercises={6}
                variant="pastel-blue"
            />

            <ActivityItem
                title="Leg Day"
                date="Mon, Nov 24"
                duration="60 min"
                exercises={5}
                variant="pastel-purple"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.xxxl,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    card: {
        marginBottom: spacing.md,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    cardStats: {
        flexDirection: 'row',
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
