import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import classes from './FrontPage.module.css';
import CartContext from "../../store/cart-context";

const FrontPage = (props) => {
    const cartCntxt = useContext(CartContext);
    let quantity = cartCntxt.items.length;

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.row}>
                    <Link to="/" className={classes.column}>Home</Link>
                    <Link to="/Store" className={classes.column}>Store</Link>
                    <Link to="/About" className={classes.column}>About</Link>
                </div>
                <button className={classes.cart} onClick={props.onClick}>
                    Cart
                    <span className={classes.badge}>{quantity}</span>
                </button>
            </div>
            <h1 className={classes.row2}>The Generics</h1>
        </div>
    );
};

export default FrontPage;
