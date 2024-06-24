//provide value of specific context for its children

import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null);

const CART_KEY = 'cart';
const EMPTY_CART = {
  items: [],
  totalCount: 0,
  totalPrice:0
}

export default function CartProvider({ children }) {
  const initCart = getCartFromLocalStorage();
  const [cartItems, setCartItems] = useState(initCart.items);
  const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
  const [totalCount, setTotalCount] = useState(initCart.totalCount);

  localStorage.setItem(
    CART_KEY,
    JSON.stringify({
      items: cartItems,
      totalCount,
      totalPrice
    })
  )


  useEffect(() => {
    const totalPrice = sum(cartItems.map(item => item.price));
    const totalCount = sum(cartItems.map(item => item.quantity));
    setTotalCount(totalCount);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
  }

  const sum = items => {
    return items.reduce((prevValue, currValue)=> prevValue + currValue, 0)
  }

  const removeFromCart = foodId => {
    const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
    setCartItems(filteredCartItems);
  }

  const changeQuantity = (cartItem, newQuantity) => {
    const { food } = cartItem;

    const changeCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: food.price * newQuantity,
    };

    setCartItems(cartItems.map(item => item.food.id === food.id ? changeCartItem : item));
  }

  const addToCart = food => {
    const cartItem = cartItems.find(item => item.food.id === food.id);
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { food, quantity: 1, price: food.price }]);
    }
  }

  return <CartContext.Provider value={{cart:{items:cartItems, totalCount, totalPrice},removeFromCart, changeQuantity, addToCart}}>
    {children}
  </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);
