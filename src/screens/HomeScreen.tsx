import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories, FoodItem, popularDishes, popularRestaurants, Restaurant, User } from '../constants/contants';

const HomeScreen = () => {
    const navigation = useNavigation<any>();

    const renderRestaurantCard = ({ item }: { item: Restaurant }) => (
        <Pressable style={styles.restaurantCard}>
            <View style={styles.cardImageWrapper}>
                <Text style={styles.cardEmoji}>{item.emoji}</Text>
            </View>
            <View style={styles.cardInfo}>
                <View style={styles.cardHeader}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <Text style={styles.restaurantRating}>{item.rating}</Text>
                </View>
                <Text style={styles.cuisineText}>{item.cuisine}</Text>
                <View style={styles.cardFooter}>
                    <Text style={styles.footerText}>⏱️ {item.deliveryTime}</Text>
                    <Text style={styles.footerText}>•</Text>
                    <Text style={styles.footerText}>💳 {item.minOrder}</Text>
                </View>
            </View>
        </Pressable>
    );

    const renderTrendingDish = (dish: FoodItem) => (
        <Pressable
            key={dish.id}
            style={styles.dishCard}
            onPress={() => navigation.navigate('Order', { item: dish })}
        >
            <View style={styles.dishImageWrapper}>
                <Text style={styles.dishEmoji}>{dish.image}</Text>
            </View>
            <Text style={styles.dishName} numberOfLines={1}>{dish.name}</Text>
            <View style={styles.dishHeader}>
                <Text style={styles.dishRating}>{dish.rating}</Text>
                <Text style={styles.dishCategory}>{dish.category.split(' ')[0]}</Text>
            </View>
            <View style={styles.dishFooter}>
                <Text style={styles.dishPrice}>{dish.price}</Text>
                <View style={styles.addBtn}>
                    <Text style={styles.addBtnText}>+</Text>
                </View>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Visual Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.deliveringLabel}>Delivering to</Text>
                        <View style={styles.locationContainer}>
                            <Text style={styles.locationPin}>📍</Text>
                            <Text style={styles.locationText}>{User[0].address}</Text>
                        </View>
                    </View>
                    <View style={styles.notificationWrapper}>
                        <Text style={styles.bellIcon}>🔔</Text>
                    </View>
                </View>

                {/* Banner Promo */}
                <View style={styles.promoBanner}>
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoTitle}>Pizza Weekend! 🍕</Text>
                        <Text style={styles.promoSubtitle}>Get 50% OFF on all pizzas</Text>
                        <Pressable style={styles.promoButton}>
                            <Text style={styles.promoButtonText}>Order Now</Text>
                        </Pressable>
                    </View>
                    <View style={styles.promoImageWrapper}>
                        <Text style={styles.promoImageEmoji}>🍕</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                </View>
                <View style={styles.categoriesContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesList}>
                        {categories.map((cat) => (
                            <Pressable key={cat.id} style={styles.categoryBubble}>
                                <Text style={styles.categoryText}>{cat.name}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>

                {/* Popular Dishes */}
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionTitle}>Trending Dishes</Text>
                    <Pressable onPress={() => navigation.navigate('Search')}>
                        <Text style={styles.seeAllText}>See All</Text>
                    </Pressable>
                </View>
                <View style={styles.dishesContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dishesList}>
                        {popularDishes.map((dish) => renderTrendingDish(dish))}
                    </ScrollView>
                </View>

                {/* Featured Restaurants */}
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionTitle}>Popular Near You</Text>
                    <Pressable>
                        <Text style={styles.seeAllText}>See All</Text>
                    </Pressable>
                </View>

                <FlatList
                    data={popularRestaurants}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRestaurantCard}
                    scrollEnabled={false} // Nested inside ScrollView
                    contentContainerStyle={styles.listContainer}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F5',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 20,
    },
    deliveringLabel: {
        fontSize: 12,
        color: '#888',
        fontWeight: '500',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    locationPin: {
        fontSize: 16,
        marginRight: 4,
    },
    locationText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222',
    },
    notificationWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 5,
        elevation: 2,
    },
    bellIcon: {
        fontSize: 18,
    },
    promoBanner: {
        backgroundColor: '#FF4500',
        borderRadius: 24,
        marginHorizontal: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 6,
        marginBottom: 25,
    },
    promoTextContainer: {
        flex: 1.2,
    },
    promoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    promoSubtitle: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.85)',
        marginTop: 6,
    },
    promoButton: {
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        alignSelf: 'flex-start',
        marginTop: 14,
    },
    promoButtonText: {
        color: '#FF4500',
        fontWeight: 'bold',
        fontSize: 13,
    },
    promoImageWrapper: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    promoImageEmoji: {
        fontSize: 60,
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    seeAllText: {
        color: '#FF4500',
        fontSize: 14,
        fontWeight: '600',
    },
    categoriesContainer: {
        marginBottom: 25,
    },
    categoriesList: {
        paddingHorizontal: 16,
    },
    categoryBubble: {
        backgroundColor: '#FFF',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
        elevation: 2,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    dishesContainer: {
        marginBottom: 25,
    },
    dishesList: {
        paddingHorizontal: 12,
    },
    dishCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 12,
        marginHorizontal: 6,
        width: 140,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
    },
    dishImageWrapper: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFF1EB',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    dishEmoji: {
        fontSize: 40,
    },
    dishName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    dishHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    dishRating: {
        fontSize: 11,
        fontWeight: '600',
        color: '#444',
    },
    dishCategory: {
        fontSize: 10,
        color: '#999',
        fontWeight: '500',
    },
    dishFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dishPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF4500',
    },
    addBtn: {
        backgroundColor: '#FF4500',
        width: 24,
        height: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addBtnText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 14,
    },
    restaurantCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 14,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.04,
        shadowRadius: 12,
        elevation: 3,
    },
    cardImageWrapper: {
        width: 70,
        height: 70,
        backgroundColor: '#FFF1EB',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardEmoji: {
        fontSize: 36,
    },
    cardInfo: {
        flex: 1,
        marginLeft: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    restaurantRating: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#444',
    },
    cuisineText: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    footerText: {
        fontSize: 12,
        color: '#666',
        marginRight: 6,
        fontWeight: '500',
    },
});
