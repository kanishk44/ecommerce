import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { db } from "../firebaseConfig";
import { collection, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useAuth();

  // Load cart items from Firestore when user logs in
  useEffect(() => {
    if (currentUser) {
      const loadCartItems = async () => {
        try {
          const userCartRef = doc(db, "carts", currentUser.uid);
          const cartDoc = await getDoc(userCartRef);

          if (cartDoc.exists()) {
            setCartItems(cartDoc.data().items || []);
          } else {
            // Create a new cart document for the user
            await setDoc(userCartRef, { items: [] });
            setCartItems([]);
          }
        } catch (error) {
          console.error("Error loading cart items:", error);
        }
      };

      loadCartItems();
    } else {
      // Clear cart when user logs out
      setCartItems([]);
    }
  }, [currentUser]);

  // Save cart items to Firestore whenever they change
  useEffect(() => {
    if (currentUser && cartItems.length > 0) {
      const saveCartItems = async () => {
        try {
          const userCartRef = doc(db, "carts", currentUser.uid);
          await updateDoc(userCartRef, { items: cartItems });
        } catch (error) {
          console.error("Error saving cart items:", error);
        }
      };

      saveCartItems();
    }
  }, [cartItems, currentUser]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
