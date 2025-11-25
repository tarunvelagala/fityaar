// App.tsx
import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from '@theme/ThemeContext';
import HomeScreen from '@screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { getNavigationTheme } from '@theme/navigationTheme';
import TabNavigator from '@navigation/TabNavigator';

const MainLayout = () => {
  const { colors, isDark } = useTheme();
  const navigationTheme = getNavigationTheme(colors, isDark);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <NavigationContainer theme={navigationTheme}>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}