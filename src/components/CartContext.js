// src/components/CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  const [bookedServices, setBookedServices] = useState(new Set());

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("🛑 Failed to persist cart in localStorage:", err);
    }

    const updatedSet = new Set(cart.map((item) => item.title));
    setBookedServices(updatedSet);
  }, [cart]);

  const addToCart = (item) => {
    const itemWithQuantity = { ...item, quantity: item.quantity || 1 };

    setCart((prev) => {
      const exists = prev.find((i) => i.title === itemWithQuantity.title);
      if (exists) return prev;
      return [...prev, itemWithQuantity];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const numericPrice = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
      const quantity = item?.quantity || 1;
      return sum + numericPrice * quantity;
    }, 0);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal, clearCart, bookedServices }}
    >
      {children}
    </CartContext.Provider>
  );
};
