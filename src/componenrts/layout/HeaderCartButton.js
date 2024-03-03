import { useContext } from "react";
import React from 'react'
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/Cart-context";

const HeaderCartButton = (props) =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartitems = cartCtx.items ? cartCtx.items.reduce((currNumber, item) =>{
        return currNumber + item.amount
    }, 0) : 0;
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartitems}</span>
        </button>
    )
}

export default HeaderCartButton;