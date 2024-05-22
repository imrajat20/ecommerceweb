import { useState } from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import Cart from './components/cart/Cart';
import Items from './components/Items/Items';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
       { cartIsShown && <Cart onClose={hideCart}/>}
      <FrontPage onClick={showCart}></FrontPage>
      <Items/>
    </CartProvider>
  );
}

export default App;
