import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';

import HomePage from './components/mainly/Home';
import Details from './components/mainly/Details';
import Stores from './components/mainly/Stores';

function App() {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.cartCount);
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem('cart'));
    if (initialState && cartCount === 0 && cartItems.length === 0) {
      dispatch({ type: 'cart/init', payload: initialState });
    }
  }, [dispatch, cartCount, cartItems]);

  const handleAddToCart = (item, quantity = 1) => {
    dispatch(addToCart({ ...item, quantity }));
    const updatedCartItems = [...cartItems, { ...item, quantity }];
    localStorage.setItem('cart', JSON.stringify({ cartItems: updatedCartItems, cartCount: cartCount + 1 }));
  };

  const handleDeleteFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ cartItems, cartCount }));
  }, [cartItems, cartCount]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage cartCount={cartCount} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/details/:id"
          element={<Details cartCount={cartCount} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/store"
          element={<Stores cartCount={cartCount} cartItems={cartItems} handleDeleteFromCart={handleDeleteFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
