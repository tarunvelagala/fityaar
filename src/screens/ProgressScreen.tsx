// src/screens/ProgressScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { Text } from '@components/common/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProgressScreen = () => {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.content}>
                <Text variant="heading">Progress</Text>
                <Text variant="body" secondary style={styles.subtitle}>
                    Track your fitness journey and stats here.
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        marginTop: 8,
        textAlign: 'center',
    },
});

export default ProgressScreen;
