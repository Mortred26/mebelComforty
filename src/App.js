import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';

import HomePage from './components/mainly/Home';
import Details from './components/mainly/Details';
import Stores from './components/mainly/Stores';
import Searches from './components/mainly/Searches';
import axios from 'axios';

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
    const updatedCartItems = [...cartItems, { ...item, quantity, image: item.image }];
    localStorage.setItem('cart', JSON.stringify({ cartItems: updatedCartItems, cartCount: cartCount + 1 }));
  };

  const handleDeleteFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ cartItems, cartCount }));
  }, [cartItems, cartCount]);

 // search
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://remonabackend.onrender.com/api/v1/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially set to all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.price.toString().includes(query) ||
        item.category.name.toLowerCase().includes(query) ||
        item.brand.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage handleSearch={handleSearch} cartCount={cartCount} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/details/:id"
          element={<Details handleSearch={handleSearch}  filteredProducts={filteredProducts} cartCount={cartCount} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/store"
          element={<Stores handleSearch={handleSearch}  filteredProducts={filteredProducts} cartCount={cartCount} cartItems={cartItems} handleDeleteFromCart={handleDeleteFromCart} />}
        />
              <Route
          path="/search"
          element={<Searches handleSearch={handleSearch}  filteredProducts={filteredProducts} cartCount={cartCount} onAddToCart={handleAddToCart}/>}
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
