import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileOptionProps } from '../constants/contants';
import { useAuth } from '../provider/authProvider';


const ProfileOption = ({ icon, title, subtitle, onPress, destructive }: ProfileOptionProps) => (
    <Pressable style={styles.optionRow} onPress={onPress}>
        <View style={[styles.iconWrapper, destructive && styles.destructiveIconWrapper]}>
            <Text style={[styles.optionEmoji, destructive && styles.destructiveEmoji]}>{icon}</Text>
        </View>
        <View style={styles.optionTextContainer}>
            <Text style={[styles.optionTitle, destructive && styles.destructiveText]}>{title}</Text>
            {subtitle && <Text style={styles.optionSubtitle}>{subtitle}</Text>}
        </View>
        <Text style={styles.chevron}>›</Text>
    </Pressable>
);

const ProfileScreen = () => {
    const { Logout } = useAuth();

    const handleLogout = async () => {
        await Logout();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarGradient}>
                        <Text style={styles.avatarText}>AY</Text>
                    </View>
                    <Text style={styles.userName}>Ankur Yadav</Text>
                    <Text style={styles.userEmail}>ank@ank.com</Text>
                    <Pressable style={styles.editProfileButton}>
                        <Text style={styles.editProfileText}>Edit Profile</Text>
                    </Pressable>
                </View>

                {/* Account Settings Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionHeader}>My Account</Text>
                    <View style={styles.card}>
                        <ProfileOption icon="👤" title="Personal Info" subtitle="Manage name, phone, and addresses" />
                        <ProfileOption icon="💳" title="Payment Methods" subtitle="Visa **4242, PayPal" />
                        <ProfileOption icon="📍" title="Delivery Addresses" subtitle="2 saved locations" />
                    </View>
                </View>

                {/* Preferences Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionHeader}>Preferences</Text>
                    <View style={styles.card}>
                        <ProfileOption icon="🎟️" title="Promo & Coupons" subtitle="3 active vouchers" />
                        <ProfileOption icon="🔔" title="Notifications" subtitle="Push notifications & email" />
                        <ProfileOption icon="💬" title="Help & Support" subtitle="FAQs, chat support, contact" />
                    </View>
                </View>

                {/* Actions Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.card}>
                        <ProfileOption
                            icon="🚪"
                            title="Log Out"
                            subtitle="Securely sign out of your account"
                            onPress={handleLogout}
                            destructive
                        />
                    </View>
                </View>

                <Text style={styles.versionText}>FoodWorld App v1.0.0</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F5',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    profileHeader: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.04,
        shadowRadius: 16,
        elevation: 3,
        marginBottom: 20,
    },
    avatarGradient: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#FF4500',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 16,
    },
    avatarText: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
    },
    userEmail: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
    editProfileButton: {
        marginTop: 16,
        backgroundColor: '#FFF1EB',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
    },
    editProfileText: {
        color: '#FF4500',
        fontSize: 13,
        fontWeight: '700',
    },
    sectionContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 15,
        fontWeight: '700',
        color: '#666',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 10,
        marginLeft: 4,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.02,
        shadowRadius: 8,
        elevation: 2,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#FFF1EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    destructiveIconWrapper: {
        backgroundColor: '#FFEBEE',
    },
    optionEmoji: {
        fontSize: 20,
    },
    destructiveEmoji: {
        fontSize: 20,
    },
    optionTextContainer: {
        flex: 1,
        marginLeft: 16,
    },
    optionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    destructiveText: {
        color: '#D32F2F',
    },
    optionSubtitle: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
    },
    chevron: {
        fontSize: 22,
        color: '#BBB',
        fontWeight: '300',
    },
    versionText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 12,
        marginTop: 20,
    },
});
