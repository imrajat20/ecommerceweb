import React from "react";
import classes from './Homepage.module.css';

const arrList = [
    {
        date: 'JUL16',
        city: 'DETROIT, MI',
        place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        date: "JUL19",
        city: "TORONTO,ON",
        place: "BUDWEISER STAGE"
     },
     {
        date: "JUL21",
        city: "BRISTOW, VA",
        place: "JIGGY LUBE LIVE"
     }

]

const Homepage = () => {

    return (
        <div>
        <h1 className={classes.tour}>Tours</h1>
        <div className={classes.container}>
          {arrList.map((product, index) => (
            <div key={index} className={classes.card}>
              <h2>{product.date}</h2>
              <p>{product.city}</p>
              <p>{product.place}</p>
              <button >Buy ticket</button>
            </div>
          ))}
        </div>
        </div>
    );
};

export default Homepage;