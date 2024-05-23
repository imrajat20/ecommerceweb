import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import About from './components/About/About';
import Store from './components/Store/Store';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import Homepage from './components/Homepage/Homepage';

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

   const showCart = () => {
     setCartIsShown(true);
   };
   const hideCart = () => {
     setCartIsShown(false);
   };

    return (
        <CartProvider>
          <Router>
            {cartIsShown && <Cart onClick={hideCart}/>}
            <FrontPage />
            <Routes>
                <Route path="/Store" element={<Store onClick={showCart} />} />
                <Route path="/About" element={<About/>} />
                <Route path="/Homepage" element={<Homepage/>} />
            </Routes>
        </Router>
        </CartProvider>
    );
};

export default App;
