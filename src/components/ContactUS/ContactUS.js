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
            <label htmlFor="name">Name:</label>
            <input 
                id="name" 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <br/>
            <label htmlFor="email">Email:</label>
            <input 
                id="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label htmlFor="phone">Phone Number:</label>
            <input 
                id="phone" 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactUS;