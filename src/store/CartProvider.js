import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const [items, updateItems] = useState([]);
    const initialToken = localStorage.getItem('idToken');

    const [token, setToken] = useState(initialToken);

    const isLoggedInHandler = !! token;

    const loginHandler = (token) => {
        setToken(token);
    };

    const addItemToCart = item => {
        //items.push(item);
        updateItems([...items, item]);
        console.log(item);
        //cartContext.items.push(item);
    };

    const removeItemFromCartHandler = (id) => {
        updateItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartContext = {
        items: items,
        totolAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCartHandler ,
        token: token,
        isLoggedIn: isLoggedInHandler,
        login:loginHandler
    };
    return (

        <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;