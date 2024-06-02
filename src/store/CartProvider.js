import React, { useState, useEffect} from "react";
import CartContext from "./cart-context";
import axios from 'axios';

const transformEmail = (email) => {
    return email.replace(/[@.]/g, '');
  };

const CartProvider = props => {

    const [items, updateItems] = useState([]);

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const initialToken = localStorage.getItem('idToken');

    const [token, setToken] = useState(initialToken);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    

    useEffect(() => {
      const fetchCartItems = async () => {
        const mail = localStorage.getItem('userEmail');
        const userEmail = transformEmail(mail);
  
        try {
          const response = await axios.get(`https://crudcrud.com/api/02e0e7080d884585b00bd9e7e79f60e8/cart${userEmail}`);
          updateItems(response.data);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      };
  
      fetchCartItems();
    }, []);

    const loginHandler = (token) => {
        // setIsLoggedIn(true);
        setToken(token);
        setIsLoggedIn(true);
        console.log("this token",token);
        // setIsLoggedInHandler(true);
        // setIsLoggedIn(true);
    };

    const addItemToCart = async (item) => {
        updateItems((prevItems) => [...prevItems, item]);
        // const userEmail = transformEmail(localStorage.getItem('userEmail'));
        const mail = localStorage.getItem('userEmail');
        console.log(mail);
    
        const userEmail = transformEmail(mail);
        try {
          await axios.post(`https://crudcrud.com/api/02e0e7080d884585b00bd9e7e79f60e8/cart${userEmail}`, item);
        } catch (error) {
          console.error("Error adding item to cart:", error);
        }
      };

      const removeItemFromCartHandler = async (id) => {
        updateItems((prevItems) => prevItems.filter((item) => item.id !== id));
        const mail = localStorage.getItem('userEmail');
        console.log(mail);
    
        const userEmail = transformEmail(mail);
        try {
          const response = await axios.get(`https://crudcrud.com/api/02e0e7080d884585b00bd9e7e79f60e8/cart${userEmail}`);
          const itemToDelete = response.data.find(item => item.id === id);
          if (itemToDelete) {
            await axios.delete(`https://crudcrud.com/api/02e0e7080d884585b00bd9e7e79f60e8/cart${userEmail}/${itemToDelete._id}`);
          }
        } catch (error) {
          console.error("Error removing item from cart:", error);
        }
      };
      // const removeItemFromCartHandler = async (id) => {
      //   updateItems((prevItems) => prevItems.filter((item) => item.id !== id));
      //   // const userEmail = transformEmail(localStorage.getItem('userEmail'));
      //   const mail = localStorage.getItem('userEmail');
      //   console.log(mail);
    
      //   const userEmail = transformEmail(mail);
      //   try {
      //     // Fetch all cart items to find the correct one to delete
      //     const response = await axios.get(`https://crudcrud.com/api/02e0e7080d884585b00bd9e7e79f60e8/cart${userEmail}`);
      //     const itemToDelete = response.data.find(item => item.id === id);
      //     if (itemToDelete) {
      //       await axios.delete(`https://crudcrud.com/api/02e0e7080d884585b00bd9e7e79f60e8/cart${userEmail}/${itemToDelete._id}`);
      //     }
      //   } catch (error) {
      //     console.error("Error removing item from cart:", error);
      //   }
      // };
    

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