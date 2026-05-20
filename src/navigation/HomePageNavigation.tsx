// navigation/HomeTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

// Placeholder screens for the other 3 tabs
const SearchScreen = () => <View style={styles.center}><Text>Search Screen 🔍</Text></View>;
const OrdersScreen = () => <View style={styles.center}><Text>Orders Screen 📦</Text></View>;
const ProfileScreen = () => <View style={styles.center}><Text>Profile Screen 👤</Text></View>;

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hidden because the Drawer will provide the header
        tabBarActiveTintColor: '#FF4500',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: { paddingBottom: 5, height: 60 },
      }}
    >
      <Tab.Screen name="MainHome" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
});