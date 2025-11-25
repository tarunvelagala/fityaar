// src/components/home/WeeklyProgress.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@components/common/Text';
import { useTheme } from '@theme/ThemeContext';
import { spacing, borderRadius } from '@theme/constants';

type DayStatus = 'active' | 'inactive' | 'future';

type WeeklyProgressProps = {
    // Mock data for now: array of 7 statuses for Mon-Sun
    data?: DayStatus[];
};

export const WeeklyProgress: React.FC<WeeklyProgressProps> = ({
    data = ['active', 'inactive', 'active', 'active', 'future', 'future', 'future']
}) => {
    const { colors, isDark } = useTheme();
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
        <View style={styles.container}>
            {data.map((status, index) => (
                <View key={index} style={styles.dayContainer}>
                    <View
                        style={[
                            styles.indicator,
                            {
                                backgroundColor:
                                    status === 'active' ? colors.primary :
                                        status === 'inactive' ? (isDark ? '#333' : '#E0E0E0') :
                                            'transparent',
                                borderColor: status === 'future' ? (isDark ? '#333' : '#E0E0E0') : 'transparent',
                                borderWidth: status === 'future' ? 1 : 0,
                            }
                        ]}
                    />
                    <Text
                        variant="caption"
                        style={{
                            color: colors.textSecondary,
                            fontSize: 10,
                            marginTop: 4,
                            opacity: 0.7
                        }}
                    >
                        {days[index]}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing.sm,
        gap: 8, // Using gap for consistent spacing
    },
    dayContainer: {
        alignItems: 'center',
    },
    indicator: {
        width: 12,
        height: 12,
        borderRadius: 2, // Slightly rounded squares like GitHub
    },
});
