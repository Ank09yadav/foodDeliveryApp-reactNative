// navigation/DrawerNavigator.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeTabNavigator from './HomePageNavigation';
import { useAuth } from '../provider/authProvider';

const Drawer = createDrawerNavigator();

const SettingsScreen = () => <View style={styles.center}><Text>Settings Screen ⚙️</Text></View>;

const LogoutScreen = () => {
  const { Logout } = useAuth();

  useEffect(() => {
    Logout();
  }, [Logout]);

  return (
    <View style={styles.center}>
      <Text>Logging out...</Text>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF8F5' },
        headerTintColor: '#222',
        drawerActiveTintColor: '#FF4500',
      }}
    >
      {/* The main item in your drawer links directly to our 4-tab system */}
      <Drawer.Screen 
        name="HomeTabs" 
        component={HomeTabNavigator} 
        options={{ title: 'Food World Home' }} 
      />
      <Drawer.Screen 
        name="My Orders" 
        component={SettingsScreen} 
      />
       <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
      />
      <Drawer.Screen
        name="Help & Support"
        component={SettingsScreen}
        />
      <Drawer.Screen
        name="Log Out"
        component={LogoutScreen}
        />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
});