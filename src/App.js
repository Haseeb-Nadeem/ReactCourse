
import { Fragment, useState } from 'react';
import './App.css';
import Header from './componenrts/layout/Header';
import Meals from './componenrts/Meals/Meals';
import Cart from './componenrts/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShow, setCartIsShaow] = useState(false);


  const showCarthandler = () =>{
    setCartIsShaow(true);
  }

  const hidecartHandler = () =>{
    setCartIsShaow(false);
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hidecartHandler}/>}
      <Header  onShowCart={showCarthandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    
  );
}

export default App;
