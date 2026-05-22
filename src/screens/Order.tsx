import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FoodItem } from '../constants/contants';
import { useOrders } from '../provider/orderProvider';

const Order = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const insets = useSafeAreaInsets();
    const { addOrder } = useOrders();

    // Retrieve passed food item or use a fallback to prevent crashes
    const item: FoodItem = route.params?.item || {
        id: '99',
        name: 'Delicious Food Item',
        category: 'Food 🍔',
        price: '₹9.99',
        rating: '4.7 ⭐',
        image: '🍔'
    };

    const [quantity, setQuantity] = useState(1);

    // Dynamic price math
    const priceString = item.price || '₹0.00';
    const numericPrice = parseFloat(priceString.replace('₹', '')) || 0;
    const subtotal = numericPrice * quantity;
    const deliveryFee = 2.00;
    const serviceFee = 1.50;
    const grandTotal = subtotal + deliveryFee + serviceFee;

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handlePlaceOrder = () => {
        const itemsDescription = `${quantity}x ${item.name}`;
        const totalCostString = `₹${grandTotal.toFixed(2)}`;

        // Construct a stylized restaurant name based on category
        const categoryName = item.category ? item.category.split(' ')[0] : 'Food';
        const restaurantName = `${categoryName} Kitchen`;

        // Add to our global dynamic array of past orders
        addOrder(restaurantName, itemsDescription, totalCostString, item.image || '🍔');

        Alert.alert(
            "Order Placed Successfully! 🎉",
            `Your fresh order of ${quantity}x ${item.name} has been received and is being prepared!`,
            [
                {
                    text: "Track Order",
                    onPress: () => {
                        // Navigate to the Orders tab in the nested bottom tab navigator
                        navigation.navigate('Home', {
                            screen: 'HomeTabs',
                            params: { screen: 'Orders' }
                        });
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons name="chevron-left" size={28} color="#222" />
                </Pressable>
                <Text style={styles.headerTitle}>Customize Order</Text>
                <View style={styles.headerPlaceholder} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Visual Presentation Card */}
                <View style={styles.productCard}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.foodEmoji}>{item.image || '🍔'}</Text>
                    </View>

                    <View style={styles.badgeRow}>
                        <View style={styles.categoryBadge}>
                            <Text style={styles.categoryBadgeText}>{item.category || 'Special'}</Text>
                        </View>
                        <View style={styles.ratingBadge}>
                            <Text style={styles.ratingBadgeText}>{item.rating || '4.5 ⭐'}</Text>
                        </View>
                    </View>

                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.foodDescription}>
                        Savor the sensational taste of our premium, handcrafted {item.name.toLowerCase()}! Prepared using only fresh, top-grade ingredients, seasoning, and dynamic flavor layering to perfect your culinary experience.
                    </Text>
                </View>

                {/* Quantity Customization */}
                <View style={styles.quantitySection}>
                    <Text style={styles.sectionLabel}>Select Quantity</Text>
                    <View style={styles.quantityContainer}>
                        <Pressable
                            style={[styles.qtyButton, quantity <= 1 && styles.qtyButtonDisabled]}
                            onPress={decrement}
                            disabled={quantity <= 1}
                        >
                            <Text style={styles.qtyBtnText}>-</Text>
                        </Pressable>
                        <Text style={styles.qtyText}>{quantity}</Text>
                        <Pressable style={styles.qtyButton} onPress={increment}>
                            <Text style={styles.qtyBtnText}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Pricing / Receipt Breakdown */}
                <View style={styles.receiptSection}>
                    <Text style={styles.sectionLabel}>Bill Summary</Text>

                    <View style={styles.receiptCard}>
                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Item Subtotal ({quantity}x)</Text>
                            <Text style={styles.receiptValue}>₹{subtotal.toFixed(2)}</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Delivery Fee</Text>
                            <Text style={styles.receiptValue}>₹{deliveryFee.toFixed(2)}</Text>
                        </View>
                        <View style={styles.receiptRow}>
                            <Text style={styles.receiptLabel}>Taxes & Fees</Text>
                            <Text style={styles.receiptValue}>₹{serviceFee.toFixed(2)}</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={[styles.receiptRow, styles.totalRow]}>
                            <Text style={styles.totalLabel}>Grand Total</Text>
                            <Text style={styles.totalValue}>₹{grandTotal.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Sticky Action Panel */}
            <View style={[styles.actionPanel, { paddingBottom: insets.bottom > 0 ? insets.bottom + 12 : 20 }]}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>TOTAL AMOUNT</Text>
                    <Text style={styles.priceText}>₹{grandTotal.toFixed(2)}</Text>
                </View>
                <Pressable
                    style={styles.placeOrderButton}
                    onPress={handlePlaceOrder}
                >
                    <Text style={styles.placeOrderText}>Place Order</Text>
                    <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" style={styles.btnIcon} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Order;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFF8F5',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    headerPlaceholder: {
        width: 40,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    productCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 20,
        alignItems: 'center',
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.03,
        shadowRadius: 12,
        elevation: 3,
    },
    imageContainer: {
        width: 130,
        height: 130,
        backgroundColor: '#FFF1EB',
        borderRadius: 65,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    foodEmoji: {
        fontSize: 70,
    },
    badgeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    categoryBadge: {
        backgroundColor: '#FFF1EB',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
    },
    categoryBadgeText: {
        color: '#FF4500',
        fontSize: 12,
        fontWeight: '700',
    },
    ratingBadge: {
        backgroundColor: '#FFFDF5',
        borderWidth: 1,
        borderColor: '#FFE0B2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    ratingBadgeText: {
        color: '#F57C00',
        fontSize: 12,
        fontWeight: '700',
    },
    foodName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginBottom: 10,
    },
    foodDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 10,
    },
    quantitySection: {
        marginTop: 25,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 8,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.02,
        shadowRadius: 8,
        elevation: 2,
    },
    qtyButton: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#FFF1EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtyButtonDisabled: {
        backgroundColor: '#F5F5F5',
    },
    qtyBtnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF4500',
        lineHeight: 24,
    },
    qtyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    receiptSection: {
        marginTop: 25,
    },
    receiptCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.02,
        shadowRadius: 8,
        elevation: 2,
    },
    receiptRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,
    },
    receiptLabel: {
        fontSize: 14,
        color: '#666',
    },
    receiptValue: {
        fontSize: 14,
        color: '#222',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#F5F5F5',
        marginVertical: 12,
    },
    totalRow: {
        marginTop: 4,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF4500',
    },
    actionPanel: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingTop: 16,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.05,
        shadowRadius: 16,
        elevation: 10,
    },
    priceContainer: {
        justifyContent: 'center',
    },
    priceLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#999',
        letterSpacing: 0.5,
    },
    priceText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginTop: 2,
    },
    placeOrderButton: {
        flexDirection: 'row',
        backgroundColor: '#FF4500',
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    placeOrderText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnIcon: {
        marginLeft: 8,
    },
});
