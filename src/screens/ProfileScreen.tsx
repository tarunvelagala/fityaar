// src/screens/ProfileScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
    const { colors, toggleTheme, isDark } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.content}>
                <Text variant="heading">Profile</Text>
                <Text variant="body" secondary style={styles.subtitle}>
                    Manage your account and settings.
                </Text>

                <View style={styles.settingsSection}>
                    <Button
                        variant="secondary"
                        onPress={toggleTheme}
                        style={styles.button}
                    >
                        Switch to {isDark ? 'Light' : 'Dark'} Mode
                    </Button>
                </View>
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
        marginBottom: 32,
    },
    settingsSection: {
        width: '100%',
        maxWidth: 300,
    },
    button: {
        width: '100%',
    }
});

export default ProfileScreen;
