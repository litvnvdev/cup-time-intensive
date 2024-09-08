import { createPortal } from "react-dom";
import { API_URL } from "../../../api/base";
import { CloseIcon } from "../../close-icon";
import { Button } from "../../button";
import {
  CartContext,
  CartContextType,
} from "../../../../app/context/cart/cart-context";
import { useContext, useState } from "react";
import { AddToCart } from "../../../../features/cart";
import { IProduct } from "../../../../app/context/product/product-context";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IProduct;
}

export function Modal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const { addToCartItem } = useContext(CartContext) as CartContextType;

  const handleAddToCart = () => {
    addToCartItem(data, quantity);
    console.log(quantity);
  };

  return createPortal(
    <div className="fixed w-full min-h-screen top-0 flex flex-col justify-center bg-slate-700 bg-opacity-90">
      <div className="relative container mx-auto flex flex-col text-lg max-w-[336px] h-fit pb-4 bg-neutral-100 rounded-lg">
        <div className="flex flex-col gap-3">
          <img
            className="w-full rounded-t-md"
            src={`${API_URL}${data.img}`}
            alt={data.title}
          />
          <div className="flex flex-col gap-3 px-4">
            <h2>{data.title}</h2>

            <p>{data.price} ₽</p>
            <ul className="flex flex-col">
              {Object.entries(data.additional).map(([key, value]: any) => (
                <li key={key}>
                  <li className="text-gray-400 flex justify-between text-sm">
                    <p>{key}:</p>
                    <p className="text-neutral-900">{value}</p>
                  </li>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <AddToCart
                quantity={data.quantity}
                incrementQuantity={increaseQuantity}
                decrementQuantity={decreaseQuantity}
              />
              <Button onClick={handleAddToCart}>Добавить</Button>
            </div>

            <button
              className="absolute top-3 right-3 w-5 h-5"
              onClick={onClose}
            >
              <CloseIcon className="text-gray-500" width="20" height="20" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
}
