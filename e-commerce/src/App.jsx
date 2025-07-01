import React from "react"
import Products from "./components/Products"
import Cart from "./components/cart"
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(item => item.id === product.id);
      const updatedCart = [...prevCart];
  
      if (productIndex !== -1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: updatedCart[productIndex].quantity + 1
        };
      } else {
        updatedCart.push({ ...product, quantity: 1 }); 
      }
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="flex justify-center bg-gray-300">
        <div className="flex gap-[40px]">
          <div className="flex flex-wrap flex-row max-w-[1240px]" >
          <Products addToCart={addToCart} />
          </div>
          <div className="max-w-[400px]">
          <Cart cartItems={cart} removeFromCart={removeFromCart} />
          </div>     
        </div>
    
      </div>
    
    </>
  )
}

export default App
