// navigation/DrawerNavigator.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { useAuth } from '../provider/authProvider';
import HomeTabNavigator from './HomePageNavigation';
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

const CustomDrawerContent = (props: any) => {
  const { Logout } = useAuth();

  const handleLogout = async () => {
    await Logout();
  };

  const menuItems = [
    {
      name: 'My Orders',
      icon: 'calendar-text-outline',
      onPress: () => props.navigation.navigate('OrderScreen'),
    },
    {
      name: 'Settings',
      icon: 'cog-outline',
      onPress: () => props.navigation.navigate('Settings'),
    },
    {
      name: 'Help',
      icon: 'help-circle-outline',
      onPress: () => ToastAndroid.show('ankur.appdev@gmail.com', ToastAndroid.LONG),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Profile Header with a beautiful vibrant orange-red background */}
      <View style={styles.headerSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Ankur Yadav</Text>
        <Text style={styles.userEmail}>ank@ank.com</Text>
      </View>

      {/* Menu List */}
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <MaterialCommunityIcons name={item.icon as any} size={24} color="#333" style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.name}</Text>
            </Pressable>
          ))}

          <View style={styles.divider} />

          {/* Logout Item */}
          <Pressable
            style={styles.menuItem}
            onPress={handleLogout}
          >
            <MaterialCommunityIcons name="logout" size={24} color="#FF3B30" style={styles.menuIcon} />
            <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF8F5' },
        headerTintColor: '#222',
        drawerActiveTintColor: '#FF4500',
        drawerStyle: { width: 280 },
      }}
    >
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
  headerSection: {
    backgroundColor: '#FF5E36', // Vibrant premium coral-orange
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    borderWidth: 3,
    borderColor: '#ffffff',
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  menuContainer: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 24,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  logoutText: {
    color: '#FF3B30',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
});
