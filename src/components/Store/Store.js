import React, { useContext } from "react";
import classes from './Items.module.css';
import CartContext from "../../store/cart-context";

const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];
const Store = props => {

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (product) => {
    cartCtx.addItem(product);
  };

  return (
    <div>
      <h1 className={classes.music}>Music</h1>
    <div className={classes.container}>
      {productsArr.map((product, index) => (
        <div key={index} className={classes.card}>
          <img src={product.imageUrl} alt={product.title} className={classes.image} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Store;