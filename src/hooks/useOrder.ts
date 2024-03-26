import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types';

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);
    
    const addItem = (item: MenuItem) => {
        const itemsExist = order.find(orderItem => orderItem.id === item.id);
        if(itemsExist) {
            const upsatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem);
            setOrder(upsatedOrder);
        }else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const palceOrder = () => {
        setOrder([])
        setTip(0)
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        palceOrder
    }
}
