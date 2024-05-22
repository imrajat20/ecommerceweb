import React, { useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const cartElements = [
  {
  
  title: 'Colors',
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  quantity: 2,
  },
  
  {
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  quantity: 3,
  },
  
  {
  title: 'Yellow and Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  quantity: 1,
  
  }
]


const Cart = (props) => {

  const [products, setProducts] = useState(cartElements);

  const deleteHandler = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };
    
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

let amount=0;
amount = products.forEach((element) => {
    amount = amount+ Number(element.price);
   })

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount:{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;