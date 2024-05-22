import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const [items, updateItems] = useState([]);

    const addItemToCart = item => {
        //items.push(item);
        updateItems([...items, item]);
        //cartContext.items.push(item);
    };

    const removeItemFromCartHandler = item => {};

    const cartContext = {
        items: items,
        totolAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCartHandler ,
    };
    return (
        <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;