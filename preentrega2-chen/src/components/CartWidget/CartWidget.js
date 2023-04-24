import React from 'react';
import cart from './cart.svg'
import styles from './CartWidget.module.css'

const CartWidget = () => {
  return (
    <div>
      <img src={cart} className={styles.cart} alt="Cart widget" />
      <span><p className={styles.itemsInCart}>0</p></span>
    </div>
  );
};

export default CartWidget;