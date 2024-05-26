import React from "react";
import { Link } from 'react-router-dom';
import classes from './FrontPage.module.css';

const FrontPage = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.row}>
                    <Link to="/Homepage" className={classes.column}>Home</Link>
                    <Link to="/Store" className={classes.column}>Store</Link>
                    <Link to="/About" className={classes.column}>About</Link>
                    <Link to="/ContactUS" className={classes.column}>ContactUS</Link>
                </div>
            </div>
            <h1 className={classes.row2}>The Generics</h1>
        </div>
    );
};

export default FrontPage;
