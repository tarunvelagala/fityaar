/**
 * FitYaar - Workout Tracker App
 * iOS-Inspired Minimalist Design
 */

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, Card } from "./src/components/common";
import { AppSplashScreen } from "./src/screens/AppSplashScreen";
import { colors, spacing } from "./src/theme";
import * as ExpoSplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
ExpoSplashScreen.preventAutoHideAsync();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <AppSplashScreen onFinish={() => setShowSplash(false)} />;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text variant="display" style={styles.title}>
            FitYaar
          </Text>
          <Text variant="body" color={colors.text.secondary} style={styles.subtitle}>
            Design System Ready ✓
          </Text>

          <View style={styles.cardGrid}>
            <Card color="blue" style={styles.card}>
              <Text variant="caption">Blue Card</Text>
            </Card>
            <Card color="beige" style={styles.card}>
              <Text variant="caption">Beige Card</Text>
            </Card>
            <Card color="green" style={styles.card}>
              <Text variant="caption">Green Card</Text>
            </Card>
            <Card color="yellow" style={styles.card}>
              <Text variant="caption">Yellow Card</Text>
            </Card>
            <Card color="pink" style={styles.card}>
              <Text variant="caption">Pink Card</Text>
            </Card>
            <Card color="purple" style={styles.card}>
              <Text variant="caption">Purple Card</Text>
            </Card>
          </View>
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    padding: spacing.xxl,
  },
  title: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    marginBottom: spacing.xxl,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  card: {
    width: '47%',
    aspectRatio: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
