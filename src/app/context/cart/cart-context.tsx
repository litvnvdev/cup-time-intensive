import { createContext, useEffect, useState } from "react";
import { IProduct } from "../product/product-context";

//TODO: add types to context and work with FSD structure

export type CartContextType = {
  cart: IProduct[];
  addToCartItem: (product: IProduct, quantity: number) => void;
  removeCartItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const cartStore = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartStore);
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCartItem = (product: any, quantity: any) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item: any) => item.id === product.id);
    if (itemIndex >= 0) {
      newCart[itemIndex].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }
    setCart(newCart);
  };

  const removeCartItem = (productId: any) => {
    setCart(cart.filter((item: any) => item.id !== productId));
  };

  const updateQuantity = (productId: any, quantity: any) => {
    if (quantity < 1) {
      removeCartItem(productId);
    } else {
      setCart(
        cart.map((item: any) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartItem,
        removeCartItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
