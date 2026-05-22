import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories, popularRestaurants, Restaurant } from '../constants/contants';

const HomeScreen = () => {
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

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Visual Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.deliveringLabel}>Delivering to</Text>
                        <View style={styles.locationContainer}>
                            <Text style={styles.locationPin}>📍</Text>
                            <Text style={styles.locationText}>Home - 123 Foodie Street</Text>
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
