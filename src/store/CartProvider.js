import React from 'react'
import CartContext from './Cart-context';



const CartProvider = (props) => {
    const addItemToCartHandler = item =>{};
    const removeItemToCartHandler = id =>{};
    
    const cartContext = {
        item: [],
        totalAmount: 0,
        addItems: addItemToCartHandler,
        removeItem:  removeItemToCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider