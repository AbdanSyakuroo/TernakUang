import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';

import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffffff',
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
          // Use a transparent background on iOS to show the blur effect
          position: 'absolute',
        },
        default: {},
      }),
    }}>
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      }}
    />
    <Tabs.Screen
      name="akademi"
      options={{
        title: 'Akademi',
        tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="book-bookmark" color={color} />,
      }}
    />
    <Tabs.Screen
      name="watchlist"
      options={{
        title: 'Watchlist',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="elevation-rise" color={color} />,
      }}
    />
    <Tabs.Screen
      name="insight"
      options={{
        title: 'Insight',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="document-text" color={color} />,
      }}
    />
    <Tabs.Screen
      name="member"
      options={{
        title: 'Member',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="card" color={color} />,
      }}
    />
  </Tabs>
  );
}
