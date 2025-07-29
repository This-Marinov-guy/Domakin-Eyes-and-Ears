import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import "./global.css";

import { HomeScreen, PropertiesScreen, AgentsScreen, ProfileScreen, ViewingsMapScreen } from './src/screens';
import { colors, typography, shadows } from './src/theme';

const Tab = createBottomTabNavigator();

const TabIcon = ({ label, focused, size = 20 }: { label: string; focused: boolean; size?: number }) => {
  const color = focused ? colors.primary.orange : colors.neutral.mediumGray;
  
  const getIconName = (label: string): keyof typeof Ionicons.glyphMap => {
    switch (label) {
      case 'Home': return focused ? 'home' : 'home-outline';
      case 'Properties': return focused ? 'business' : 'business-outline';
      case 'Viewings': return focused ? 'map' : 'map-outline';
      case 'Agents': return focused ? 'people' : 'people-outline';
      case 'Profile': return focused ? 'person' : 'person-outline';
      default: return 'apps-outline';
    }
  };

  return (
    <Ionicons 
      name={getIconName(label)} 
      size={size} 
      color={color}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor={colors.background.pink} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon label={route.name} focused={focused} />
          ),
          tabBarActiveTintColor: colors.primary.orange,
          tabBarInactiveTintColor: colors.neutral.mediumGray,
          tabBarStyle: {
            backgroundColor: colors.neutral.white,
            borderTopColor: colors.neutral.borderGray,
            borderTopWidth: 1,
            paddingTop: 12,
            paddingBottom: 24,
            paddingHorizontal: 16,
            marginHorizontal: 16,
            marginBottom: 16,
            height: 80,
            borderRadius: 20,
            position: 'absolute',
            ...shadows.lg,
          },
                      tabBarLabelStyle: {
              fontSize: typography.fontSize.xs,
              fontWeight: typography.fontWeight.medium as any,
              marginTop: 4,
            },
            headerShown: false,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Properties" 
          component={PropertiesScreen}
          options={{
            tabBarLabel: 'Properties',
          }}
        />
        <Tab.Screen 
          name="Viewings" 
          component={ViewingsMapScreen}
          options={{
            tabBarLabel: 'Viewings',
          }}
        />
        <Tab.Screen 
          name="Agents" 
          component={AgentsScreen}
          options={{
            tabBarLabel: 'Agents',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
});
