import React from "react";
import { useParams } from "react-router-dom";
import classes from './ProductPage.module.css';

const ProductDetails = () => {

    const params = useParams();

    return (
        <section className={classes.detail}>
            <h1>Product Detail</h1>
            <p>Product Name: {params.detail}</p>
            <p>This item is very good !</p>
        </section>
    );
};

export default ProductDetails;