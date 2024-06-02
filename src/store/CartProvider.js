import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const [items, updateItems] = useState([]);

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const initialToken = localStorage.getItem('idToken');

    const [token, setToken] = useState(initialToken);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const loginHandler = (token) => {
        // setIsLoggedIn(true);
        setToken(token);
        setIsLoggedIn(true);
        console.log("this token",token);
        // setIsLoggedInHandler(true);
        // setIsLoggedIn(true);
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

    const cartvalue = {
        items: items,
        totolAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCartHandler ,
        token: token,
        loggedIn: isLoggedIn,
        login:loginHandler
    };
    return (

        <CartContext.Provider value={cartvalue}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;