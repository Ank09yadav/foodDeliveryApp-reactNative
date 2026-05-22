import React, { createContext, useContext, useState } from 'react';
import { PastOrder, activeOrder as initialActiveOrder, pastOrders as initialPastOrders } from '../constants/contants';

interface OrderContextType {
    pastOrders: PastOrder[];
    activeOrder: any;
    addOrder: (restaurantName: string, items: string, price: string, emoji: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
    const [pastOrders, setPastOrders] = useState<PastOrder[]>(initialPastOrders);
    const [activeOrder, setActiveOrder] = useState<any>(initialActiveOrder);

    const addOrder = (restaurantName: string, items: string, price: string, emoji: string) => {
        const newOrder: PastOrder = {
            id: (pastOrders.length + 1).toString(),
            restaurantName,
            items,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            price,
            status: 'Delivered',
            emoji,
        };
        setPastOrders([newOrder, ...pastOrders]);
    };

    return (
        <OrderContext.Provider value={{ pastOrders, activeOrder, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrders must be used within an OrderProvider');
    }
    return context;
};
