import React from "react";;

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (items) => {},
    removeItem: (id) => {},
    token:'',
    loggedIn: false,
    login: (token) => {}
});

export default CartContext;