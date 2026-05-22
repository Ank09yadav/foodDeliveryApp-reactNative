import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { PastOrder } from '../constants/contants';
import { useOrders } from '../provider/orderProvider';

const OrdersScreen = () => {
    const { pastOrders, activeOrder } = useOrders();
    const navigation = useNavigation<any>();
    const renderPastOrder = ({ item }: { item: PastOrder }) => (
        <View style={styles.pastOrderCard}>
            <View style={styles.pastOrderHeader}>
                <View style={styles.restaurantInfo}>
                    <Text style={styles.restaurantEmoji}>{item.emoji}</Text>
                    <View style={styles.restaurantTextContainer}>
                        <Text style={styles.restaurantName}>{item.restaurantName.split(' ')[0]}</Text>
                        <Text style={styles.orderDate}>{item.date}</Text>
                    </View>
                </View>
                <Text style={[
                    styles.statusBadge,
                    item.status === 'Delivered' ? styles.statusBadgeDelivered : styles.statusBadgeCancelled
                ]}>
                    {item.status}
                </Text>
            </View>

            <Text style={styles.orderItems} numberOfLines={1}>{item.items}</Text>

            <View style={styles.pastOrderFooter}>
                <Text style={styles.orderPrice}>{item.price}</Text>
                <Pressable style={styles.reorderButton}>
                    <Text style={styles.reorderButtonText}>Reorder</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Orders</Text>
                <Text style={styles.headerSubtitle}>Keep track of your delicious cravings</Text>
            </View>

            {/* Scrollable list containing Active Order Header + Past Orders */}
            <Pressable
            // onPress={() => navigation.navigate('Order')}
            >
                <FlatList
                    data={pastOrders}
                    keyExtractor={(item) => item.id}
                    renderItem={renderPastOrder}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        activeOrder && (
                            <View style={styles.activeOrderContainer}>
                                <Text style={styles.sectionTitle}>Active Order</Text>
                                <View style={styles.activeOrderCard}>
                                    <View style={styles.activeOrderHeader}>
                                        <Text style={styles.activeRestaurant}>{activeOrder.restaurantName}</Text>
                                        <Text style={styles.activeEta}>ETA: {activeOrder.eta}</Text>
                                    </View>
                                    <Text style={styles.activeItems} numberOfLines={2}>
                                        {activeOrder.items}
                                    </Text>
                                    <View style={styles.statusRow}>
                                        <Text style={styles.statusText}>Status: {activeOrder.status}</Text>
                                    </View>
                                    {/* Progress Bar */}
                                    <View style={styles.progressBarBg}>
                                        <View style={[styles.progressBarFill, { width: `${activeOrder.progress * 100}%` }]} />
                                    </View>
                                </View>
                                <Text style={styles.sectionTitle}>Past Orders</Text>
                            </View>
                        )
                    }
                />
            </Pressable>
        </SafeAreaView>
    );
};

export default OrdersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F5',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 15,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    activeOrderContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 12,
        marginTop: 10,
    },
    activeOrderCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 18,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: '#FF4500',
    },
    activeOrderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    activeRestaurant: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    activeEta: {
        fontSize: 13,
        fontWeight: '700',
        color: '#FF4500',
        backgroundColor: '#FFF1EB',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    activeItems: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 14,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    progressBarBg: {
        height: 6,
        backgroundColor: '#F0F0F0',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#FF4500',
        borderRadius: 3,
    },
    pastOrderCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
    },
    pastOrderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    restaurantInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    restaurantEmoji: {
        fontSize: 26,
    },
    restaurantTextContainer: {
        marginLeft: 12,
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    orderDate: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
    },
    statusBadge: {
        fontSize: 12,
        fontWeight: '700',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusBadgeDelivered: {
        color: '#2E7D32',
        backgroundColor: '#E8F5E9',
    },
    statusBadgeCancelled: {
        color: '#C62828',
        backgroundColor: '#FFEBEE',
    },
    orderItems: {
        fontSize: 14,
        color: '#666',
        marginBottom: 14,
    },
    pastOrderFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
        paddingTop: 12,
    },
    orderPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    reorderButton: {
        borderColor: '#FF4500',
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    reorderButtonText: {
        color: '#FF4500',
        fontSize: 13,
        fontWeight: '700',
    },
});
