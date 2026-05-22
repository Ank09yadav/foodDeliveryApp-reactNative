
export const User = [
    {
        id: 1,
        name: "Ankur Yadav",
        profileImageUrl: 'https://www.pexels.com/photo/a-serval-sitting-on-the-ground-25956283/',
        email: "ank@ank.com",
        address: "123 main street, Lucknow",
        phone: '9876543210',

    }
]
// profile page 
export interface ProfileOptionProps {
    icon: string;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    destructive?: boolean;
}

export interface FoodItem {
    id: string;
    name: string;
    category: string;
    price: string;
    rating: string;
    image: string;
}
// home screen 
export interface Restaurant {
    id: string;
    name: string;
    cuisine: string;
    rating: string;
    deliveryTime: string;
    minOrder: string;
    emoji: string;
}


export const categories = [
    { id: '1', name: 'Burgers 🍔' },
    { id: '2', name: 'Pizza 🍕' },
    { id: '3', name: 'Sushi 🍣' },
    { id: '4', name: 'Desserts 🍰' },
    { id: '5', name: 'Drinks 🥤' },
];

export const popularRestaurants: Restaurant[] = [
    { id: '1', name: 'Burger Palace', cuisine: 'Fast Food, Burgers', rating: '4.7 ⭐', deliveryTime: '15-20 min', minOrder: '$10 min', emoji: '🍔' },
    { id: '2', name: 'Pizza Express', cuisine: 'Italian, Pizza', rating: '4.8 ⭐', deliveryTime: '20-30 min', minOrder: '$12 min', emoji: '🍕' },
    { id: '3', name: 'Sushi Master', cuisine: 'Asian, Japanese', rating: '4.9 ⭐', deliveryTime: '25-35 min', minOrder: '$15 min', emoji: '🍣' },
    { id: '4', name: 'Sweet Tooth', cuisine: 'Cakes, Patisserie', rating: '4.6 ⭐', deliveryTime: '10-15 min', minOrder: '$5 min', emoji: '🍰' },
];


export const popularDishes: FoodItem[] = [
    { id: '1', name: 'Pepperoni Supreme', category: 'Pizza 🍕', price: '$12.99', rating: '4.8 ⭐', image: '🍕' },
    { id: '2', name: 'Double Cheese Burger', category: 'Burgers 🍔', price: '$8.49', rating: '4.7 ⭐', image: '🍔' },
    { id: '3', name: 'Crunchy Salmon Roll', category: 'Sushi 🍣', price: '$14.99', rating: '4.9 ⭐', image: '🍣' },
    { id: '4', name: 'Red Velvet Slice', category: 'Desserts 🍰', price: '$5.99', rating: '4.6 ⭐', image: '🍰' },
    { id: '5', name: 'Berry Blast Smoothie', category: 'Drinks 🥤', price: '$4.99', rating: '4.5 ⭐', image: '🥤' },
    { id: '6', name: 'Classic Margherita', category: 'Pizza 🍕', price: '$10.99', rating: '4.7 ⭐', image: '🍕' },
];

// Order Screen 
export interface PastOrder {
    id: string;
    restaurantName: string;
    items: string;
    date: string;
    price: string;
    status: 'Delivered' | 'Cancelled';
    emoji: string;
}
export const activeOrder = {
    restaurantName: 'Burger Palace 🍔',
    items: '1x Double Cheeseburger, 1x Large Fries, 1x Pepsi',
    eta: '15 mins',
    status: 'Out for Delivery 🚀',
    progress: 0.75, // 75% completed
};

export const pastOrders: PastOrder[] = [
    { id: '1', restaurantName: 'Pizza Express 🍕', items: '2x Large Pepperoni Supreme', date: 'May 20, 2026', price: '$25.98', status: 'Delivered', emoji: '🍕' },
    { id: '2', restaurantName: 'Sushi Master 🍣', items: '1x Crunchy Salmon Roll, 1x Miso Soup', date: 'May 18, 2026', price: '$18.49', status: 'Delivered', emoji: '🍣' },
    { id: '3', restaurantName: 'Sweet Tooth 🍰', items: '1x Chocolate Fudge Slice, 1x Latte', date: 'May 14, 2026', price: '$9.98', status: 'Delivered', emoji: '🍰' },
    { id: '4', restaurantName: 'Noodle House 🍜', items: '1x Spicy Beef Ramen', date: 'May 10, 2026', price: '$13.99', status: 'Delivered', emoji: '🍜' },
];