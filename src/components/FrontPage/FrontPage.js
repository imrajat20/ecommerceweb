import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './FrontPage.module.css';

const FrontPage = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.row}>
                    <NavLink to="/Homepage" className={classes.column}>Home</NavLink>
                    <NavLink to="/Store" className={classes.column}>Store</NavLink>
                    <NavLink to="/About" className={classes.column}>About</NavLink>
                    <NavLink to="./ProductPage" className={classes.column}>Product</NavLink>
                    <NavLink to="/ContactUS" className={classes.column}>ContactUS</NavLink>
                </div>
            </div>
            <h1 className={classes.row2}>The Generics</h1>
        </div>
    );
};

export default FrontPage;
