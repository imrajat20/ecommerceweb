import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import About from './components/About/About';
import Store from './components/Store/Store';
import Cart from './components/cart/Cart';
import Homepage from './components/Homepage/Homepage';
import ContactUS from './components/ContactUS/ContactUS';
import ProductPage from './components/ProductPage/ProductPage';
import ProductDetails from './components/ProductPage/ProductDetails';
import Login from './components/Login/Login';
import CartContext from './store/cart-context';

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);
  
  const cartCtx = useContext(CartContext);

   const showCart = () => {
     setCartIsShown(true);
   };
   const hideCart = () => {
     setCartIsShown(false);
   };
   console.log(cartCtx.loggedIn);

    return (
          <Router>
            {cartIsShown && <Cart onClick={hideCart}/>}
            <FrontPage />
            <Routes>
                <Route path='/' element={<Navigate to="/Store"/>}/>
                <Route path="/Store" element={<Store onClick={showCart} />} />
                {cartCtx.loggedIn && <Route path="/About" element={<About />}/>}
                <Route path="/Homepage" element={<Homepage/>} />
                {cartCtx.loggedIn && <Route path="/ProductPage" element={<ProductPage/>}/>}
                <Route path='/ContactUS' element={<ContactUS/>}/>
                <Route path='/ProductPage/:detail' element={<ProductDetails/>}/>
                <Route path='/Login' element={<Login/>}/>
                 {<Route path='*' element={<Login/>}/> }
            </Routes>
        </Router>
    );
};

export default App;
