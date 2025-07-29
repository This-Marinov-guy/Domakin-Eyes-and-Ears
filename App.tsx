import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import "./global.css";

import { HomeScreen, PropertiesScreen, AgentsScreen, ProfileScreen } from './src/screens';
import { colors, typography } from './src/theme';

const Tab = createBottomTabNavigator();

const TabIcon = ({ label, focused }: { label: string; focused: boolean }) => {
  const getIcon = (label: string) => {
    switch (label) {
      case 'Properties': return '🏘️';
      case 'Agents': return '👥';
      case 'Profile': return '👤';
      default: return '📱';
    }
  };

  return (
    <Text style={[
      styles.tabIcon,
      { color: focused ? colors.primary.orange : colors.neutral.mediumGray }
    ]}>
      {getIcon(label)}
    </Text>
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
            paddingTop: 8,
            paddingBottom: 8,
            height: 70,
          },
                     tabBarLabelStyle: {
             fontSize: typography.fontSize.xs,
             fontWeight: typography.fontWeight.medium as any,
             marginTop: 4,
           },
          headerStyle: {
            backgroundColor: colors.neutral.white,
            borderBottomColor: colors.neutral.borderGray,
            borderBottomWidth: 1,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontSize: typography.fontSize.lg,
            fontWeight: typography.fontWeight.bold as any,
            color: colors.neutral.textDark,
          },
          headerTintColor: colors.primary.orange,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerTitle: 'Domakin',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Properties" 
          component={PropertiesScreen}
          options={{
            headerTitle: 'Properties',
            tabBarLabel: 'Properties',
          }}
        />
        <Tab.Screen 
          name="Agents" 
          component={AgentsScreen}
          options={{
            headerTitle: 'Our Agents',
            tabBarLabel: 'Agents',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            headerTitle: 'My Profile',
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
