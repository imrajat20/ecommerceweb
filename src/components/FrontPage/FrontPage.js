import React from "react";
import classes from './FrontPage.module.css';

const FrontPage = (props) => {
    return (
            <div>
                <div className={classes.container}>
                <div className={classes.row}>
                    <button className={classes.column}>Home</button>
                    <button className={classes.column}>Store</button>
                    <button className={classes.column}>About</button>
                </div>
                <button  className={classes.cart} onClick={props.onClick}>Cart</button>
                
            </div>
            <h1 className={classes.row2}> The Generics</h1>
            </div>
    );
};

export default FrontPage;