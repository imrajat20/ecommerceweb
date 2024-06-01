import React, { useContext, useRef } from "react";
import classes from './Login.module.css';
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    // const [isLoading, setIsLoading] = useState(false);

    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const formHandler = event => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
       const enteredPassword = passwordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaZ5dpUWi2wLHU10GHp8wyS5zaoLpgR5U',{
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.ok){
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Auth failed!';
              // if(data && data.error && data.error.message){
              //   errorMessage = data.error.message;
              // }
              throw new Error(errorMessage);
            })
          }
        }).then((data) => {
          console.log(data);
          cartCtx.login(data.idToken);
          localStorage.setItem('idToken',data.idToken);
          navigate('/ProductPage');
        })
        .catch((err) => {
          alert(err.message);
        });

    };

   return (
    <section className={classes.auth}>
    <h1>Login</h1>
    <form onSubmit={formHandler} >
      <div className={classes.control}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' ref={emailRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Your Password</label>
        <input
          type='password'
          id='password'
          ref={passwordRef}
          required
        />
      </div>
      <div className={classes.actions}>
      <button>Login</button>
      </div>
    </form>
  </section>
   );
};

export default Login;