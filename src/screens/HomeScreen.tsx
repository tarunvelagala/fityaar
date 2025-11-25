// src/screens/HomeScreen.tsx
import React from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@theme/ThemeContext';
import { HomeHeader } from '@components/home/HomeHeader';
import { QuickStats } from '@components/home/QuickStats';
import { QuickActions } from '@components/home/QuickActions';
import { RecentActivity } from '@components/home/RecentActivity';

export default function HomeScreen() {
    const { colors } = useTheme();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        // Simulate refresh
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
                }
                showsVerticalScrollIndicator={false}
            >
                <HomeHeader userName="Tarun" />

                <View style={styles.section}>
                    <QuickStats />
                </View>

                <View style={styles.section}>
                    <QuickActions />
                </View>

                <View style={styles.section}>
                    <RecentActivity />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 40,
    },
    section: {
        marginBottom: 32,
    },
});