import React, { useCallback, useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [products, setProducts] = useState(cartCtx.items);



  //  const deleteHandler = (index) =>{
  //   const newProducts = products.filter((_, i) => i !== index);
  //     setProducts(newProducts);
  //   };
  const deleteHandler = useCallback((index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  }, [products, setProducts]);
    
  const cartItems = (
    <ul className={classes["cart-items"]}>
    {products.map((item,index) => (
   <li className={classes.list} key={index}>
        <div>Name:{item.title}</div>
         <span>Price:{item.price}</span>
          <span>Quantity:{item.quantity}</span>
          <button onClick={() => deleteHandler(index)}>Delete</button> 
        </li>
    ))}
  </ul>
);
let total = 0;
products.forEach(item => {
  total += item.price || 0;
});


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span>${total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClick}>Close</button>
        <button className={classes.button}>Purchase</button>
      </div>
    </Modal>
  );
}

export default Cart;