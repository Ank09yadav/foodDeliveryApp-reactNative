// navigation/HomeTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hidden because the Drawer will provide the header
        tabBarActiveTintColor: '#FF4500',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: { paddingBottom: 5, height: 60 },
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
