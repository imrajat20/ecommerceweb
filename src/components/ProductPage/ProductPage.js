import React from "react";
import classes from './ProductPage.module.css';
import { Link } from "react-router-dom";

const ProductPage = () => {

    return (

        <section>
           <h1 className={classes.page}>Product Page</h1>
        <div className={classes.container}>
            <div><Link to='/ProductPage/Book'>A Holy Book</Link></div>
            <br/>
            <div> <Link to='/ProductPage/Shoes'>Branded Shoes</Link></div>
            <br/>
            <div> <Link to='/ProductPage/T-shirt'>New T-Shirt</Link></div>
        </div>
        </section>
    );
};

export default ProductPage;