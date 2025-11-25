// src/navigation/TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@theme/ThemeContext';
import { RootTabParamList } from './types';
import HomeScreen from '@screens/HomeScreen';
import WorkoutsScreen from '@screens/WorkoutsScreen';
import ProgressScreen from '@screens/ProgressScreen';
import ProfileScreen from '@screens/ProfileScreen';

// We'll use MaterialCommunityIcons for better fitness icons (dumbbell, etc.)
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
    const { colors, isDark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderTopColor: colors.border,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-variant' : 'home-variant-outline';
                    } else if (route.name === 'Workouts') {
                        // Dumbbell is iconic for workouts
                        iconName = 'dumbbell';
                    } else if (route.name === 'Progress') {
                        iconName = focused ? 'chart-bar' : 'chart-bar';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                    } else {
                        iconName = 'help-circle-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Workouts" component={WorkoutsScreen} />
            <Tab.Screen name="Progress" component={ProgressScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
