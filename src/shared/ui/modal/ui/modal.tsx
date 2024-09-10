import { createPortal } from "react-dom";
import { API_URL } from "../../../api/base";
import { CloseIcon } from "../../close-icon";
import { Button } from "../../button";

import { AddToCart } from "../../../../features/cart";
import { IProduct } from "../../../../app/context/product/product-context";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IProduct;
  quantity: number | undefined;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  addToCart: () => void;
}

export function Modal({
  isOpen,
  onClose,
  data,
  quantity,
  incrementQuantity,
  decrementQuantity,
  addToCart,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

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
                <li
                  className="text-gray-400 flex justify-between text-sm"
                  key={key}
                >
                  <p>{key}:</p>
                  <p className="text-neutral-900">{value}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 items-center justify-between">
              {quantity ? (
                <AddToCart
                  quantity={quantity}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                />
              ) : (
                <Button onClick={addToCart}>Добавить</Button>
              )}
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
