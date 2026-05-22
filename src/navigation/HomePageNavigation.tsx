// navigation/HomeTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hidden because the Drawer will provide the header
        tabBarActiveTintColor: '#FF4500',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: { 
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 8,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === 'MainHome') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'magnify';
          } else if (route.name === 'Orders') {
            iconName = 'clipboard-text';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          } else {
            iconName = 'help-circle';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen options={{ title: 'Home' }} name="MainHome" component={HomeScreen} />
      <Tab.Screen options={{ title: 'Search' }} name="Search" component={SearchScreen} />
      <Tab.Screen options={{ title: 'Orders' }} name="Orders" component={OrdersScreen} />
      <Tab.Screen options={{ title: 'Profile' }} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
