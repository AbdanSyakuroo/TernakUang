import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useLoadFonts } from "@/hooks/useLoadFonts";
import "react-native-gesture-handler";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isFontsLoaded = useLoadFonts();

  if (!isFontsLoaded) {
    return null; // Bisa diganti dengan Splash Screen atau Loader
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>

        <Stack.Screen name="Profileku" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signin" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="settings/profile" options={{ headerTitle: "", headerStyle: { backgroundColor: '#fde68a'},}}/>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
