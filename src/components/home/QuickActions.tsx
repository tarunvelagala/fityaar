// src/components/home/QuickActions.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@components/common/Button';
import { spacing } from '@theme/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@theme/ThemeContext';

export const QuickActions = () => {
    const { isDark } = useTheme();

    // In light mode, button is black -> icon white
    // In dark mode, button is white -> icon black
    const iconColor = isDark ? 'black' : 'white';

    return (
        <View style={styles.container}>
            <Button
                variant="primary"
                onPress={() => console.log('Start Workout')}
                icon={<MaterialCommunityIcons name="plus" size={24} color={iconColor} />}
                iconPosition="left"
                style={styles.primaryButton}
                fullWidth
            >
                Start New Workout
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.xl,
    },
    primaryButton: {
        // No extra margin needed if it's the only button
    },
});
