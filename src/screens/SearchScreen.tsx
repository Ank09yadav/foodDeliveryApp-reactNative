import React, { useState } from 'react';
import { FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FoodItem, popularDishes } from '../constants/contants';
const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Pizza 🍕', 'Burgers 🍔', 'Sushi 🍣', 'Desserts 🍰', 'Drinks 🥤'];
    const [selectedCategory, setSelectedCategory] = useState('All');



    const filteredDishes = popularDishes.filter(dish => {
        const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const renderDishItem = ({ item }: { item: FoodItem }) => (
        <View style={styles.dishCard}>
            <View style={styles.dishImageWrapper}>
                <Text style={styles.dishEmoji}>{item.image}</Text>
            </View>
            <View style={styles.dishDetails}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.dishCategory}>{item.category.split(' ')[0]}</Text>
                <View style={styles.dishFooter}>
                    <Text style={styles.dishPrice}>{item.price}</Text>
                    <Text style={styles.dishRating}>{item.rating}</Text>
                </View>
            </View>
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Search Foods</Text>
                <Text style={styles.headerSubtitle}>Find your favorite meal instantly</Text>
            </View>

            {/* Search Input */}
            <View style={styles.searchBarContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for pizza, burgers, desserts..."
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                </View>
            </View>

            {/* Categories Horizontal Scroll */}
            <View style={styles.categoriesContainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item}
                    contentContainerStyle={styles.categoriesList}
                    renderItem={({ item }) => (
                        <Pressable
                            style={[
                                styles.categoryBubble,
                                selectedCategory === item && styles.categoryBubbleActive,
                            ]}
                            onPress={() => setSelectedCategory(item)}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    selectedCategory === item && styles.categoryTextActive,
                                ]}
                            >
                                {item}
                            </Text>
                        </Pressable>
                    )}
                />
            </View>

            {/* Results Title */}
            <View style={styles.resultsHeader}>
                <Text style={styles.resultsTitle}>
                    {searchQuery ? 'Search Results' : 'Popular Dishes'}
                </Text>
                <Text style={styles.resultsCount}>{filteredDishes.length} items found</Text>
            </View>

            {/* Dishes FlatList */}
            <FlatList
                data={filteredDishes}
                keyExtractor={(item) => item.id}
                renderItem={renderDishItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No dishes match your criteria 🍕</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

export default SearchScreen;

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
    searchBarContainer: {
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    inputWrapper: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    searchInput: {
        fontSize: 15,
        color: '#222',
        padding: 0,
    },
    categoriesContainer: {
        marginBottom: 15,
    },
    categoriesList: {
        paddingHorizontal: 16,
    },
    categoryBubble: {
        backgroundColor: '#FFF',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 5,
        elevation: 2,
    },
    categoryBubbleActive: {
        backgroundColor: '#FF4500',
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    categoryTextActive: {
        color: '#FFF',
    },
    resultsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    resultsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    resultsCount: {
        fontSize: 13,
        color: '#FF4500',
        fontWeight: '600',
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    dishCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 14,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 2,
        position: 'relative',
    },
    dishImageWrapper: {
        width: 65,
        height: 65,
        backgroundColor: '#FFF1EB',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dishEmoji: {
        fontSize: 32,
    },
    dishDetails: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    dishName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    dishCategory: {
        fontSize: 12,
        color: '#999',
        marginTop: 2,
        fontWeight: '500',
    },
    dishFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    dishPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF4500',
        marginRight: 12,
    },
    dishRating: {
        fontSize: 13,
        fontWeight: '600',
        color: '#444',
    },
    addButton: {
        backgroundColor: '#FF4500',
        width: 32,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 14,
        right: 14,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 18,
    },
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyText: {
        fontSize: 15,
        color: '#666',
    },
});
