// src/components/home/QuickActions.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@components/common/Button';
import { spacing } from '@theme/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const QuickActions = () => {
    return (
        <View style={styles.container}>
            <Button
                variant="primary"
                onPress={() => console.log('Start Workout')}
                icon={<MaterialCommunityIcons name="plus" size={24} color="white" />}
                iconPosition="left"
                style={styles.primaryButton}
            >
                Start New Workout
            </Button>

            <View style={styles.secondaryRow}>
                <Button
                    variant="secondary"
                    onPress={() => console.log('Log Activity')}
                    style={styles.secondaryButton}
                    icon={<MaterialCommunityIcons name="pencil" size={20} color="black" />}
                    iconPosition="left"
                >
                    Log Activity
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.xl,
    },
    primaryButton: {
        marginBottom: spacing.md,
    },
    secondaryRow: {
        flexDirection: 'row',
    },
    secondaryButton: {
        flex: 1,
    },
});
