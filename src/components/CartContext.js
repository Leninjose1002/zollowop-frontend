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

  // Sync cart with localStorage and booked services
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("🛑 Failed to persist cart in localStorage:", err);
    }

    const updatedSet = new Set(cart.map((item) => item.title));
    setBookedServices(updatedSet);
  }, [cart]);

  // ✅ Add item to cart (merge if exists)
  const addToCart = (item) => {
    const quantity = Number(item.quantity) || 1;
    const itemWithQuantity = { ...item, quantity };

    setCart((prev) => {
      const exists = prev.find((i) => i.id === itemWithQuantity.id);
      if (exists) {
        console.log("🛒 Item exists, updating quantity");
        return prev.map((i) =>
          i.id === itemWithQuantity.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      console.log("🛒 Adding new item to cart:", itemWithQuantity);
      return [...prev, itemWithQuantity];
    });
  };

  // ✅ Remove item by ID
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Update quantity (minimum 1)
  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
          : item
      )
    );
  };

  // ✅ Get total amount
  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const numericPrice = parseInt(item?.price?.replace(/[^\d]/g, "")) || 0;
      const quantity = item?.quantity || 1;
      return sum + numericPrice * quantity;
    }, 0);
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        clearCart,
        bookedServices,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
