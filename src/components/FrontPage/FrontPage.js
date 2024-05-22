import React, { useContext } from "react";
import classes from './FrontPage.module.css';
import CartContext from "../../store/cart-context";

const FrontPage = (props) => {

    const cartCntxt =useContext(CartContext);
    let quantity = cartCntxt.items.length;

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.row}>
                    <button className={classes.column}>Home</button>
                    <button className={classes.column}>Store</button>
                    <button className={classes.column}>About</button>
                </div>
                <button  className={classes.cart} onClick={props.onClick}>
                 Cart
                <span className={classes.badge}>{quantity}</span>
                </button>
                
            </div>
            <h1 className={classes.row2}> The Generics</h1>
        </div>
    );
};

export default FrontPage;