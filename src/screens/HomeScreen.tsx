// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you use Expo icons
import { useTheme } from '../theme/ThemeContext';

export default function HomeScreen() {
    const { colors } = useTheme(); // <--- Magic happens here

    // Dynamic Styles using the colors
    const styles = getStyles(colors);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Ionicons
                    name="sparkles"
                    size={32}
                    color={colors.icon} // Uses Black in light, Purple in dark
                />
                <Text style={styles.title}>Pastel System</Text>
                <Text style={styles.subtitle}>
                    This text automatically switches color based on your device settings.
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Primary Action</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Helper to generate styles with current theme
// This allows you to keep StyleSheet logic clean
const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    card: {
        width: '80%',
        padding: 24,
        borderRadius: 20,
        backgroundColor: colors.card,
        alignItems: 'center',
        // Shadow for iOS
        shadowColor: colors.textPrimary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        // Shadow for Android
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginTop: 16,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: colors.primary, // Your #B4A5F6
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000', // Text on the pastel purple should likely be dark for contrast
        fontWeight: '600',
        fontSize: 16,
    },
});