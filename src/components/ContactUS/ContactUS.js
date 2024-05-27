import React, { useState } from "react";
import classes from './ContactUS.module.css';

const ContactUS = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const formHandler = (event) => {

        event.preventDefault();

        const detail = {
            name: name,
            email: email,
            phone: phone
        };

        fetch('https://ecommerce-web-c8b78-default-rtdb.firebaseio.com/contact.json',{
            method: "POST",
            body: JSON.stringify(detail),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setEmail('');
        setName('');
        setPhone('');
    };


    return (
        <form onSubmit={formHandler} className={classes.form}>
            <br/>
            <div className={classes.title}>
            <label htmlFor="name">Name:</label>
            <input 
                id="name" 
                type="text"
                placeholder="type name...."
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
           
              <br/>
            
            <div className={classes.mail}>
            <label htmlFor="email">Email:</label>
            <input 
                id="email" 
                type="email"
                placeholder="type email...."
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
          <br/>
           <div className={classes.number}>
           <label htmlFor="phone">Number:</label>
            <input 
                id="phone" 
                type="tel"
                placeholder="type phone number...."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
           </div>
          <br/>
            <button className={classes.button} type="submit">Submit</button>
            <br/>
        </form>
    );
};

export default ContactUS;