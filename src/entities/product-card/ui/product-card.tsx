import { useContext, useState } from "react";
import { API_URL } from "../../../shared/api/base";
import { Modal } from "../../../shared/ui/modal";
import { AddToCart } from "../../../features/cart";
import {
  CartContext,
  CartContextType,
} from "../../../app/context/cart/cart-context";

export interface Additional {
  [key: string]: string;
}
interface ProductItem {
  additional?: Additional;
  id: number;
  img: string;
  price: number;
  title: string;
  quantity?: number;
}
export interface ProductCardProps {
  data: ProductItem;
  isCart?: boolean;
  incrementQuantity?: any;
  decrementQuantity?: any;
}

export function ProductCard({ data, isCart }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const { addToCartItem, updateQuantity } = useContext(
    CartContext
  ) as CartContextType;

  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    addToCartItem(data, quantity);
  };

  // const handleRemoveFromCart = () => {};

  const decreaseQuantityItem = () => {
    if (data.quantity !== undefined) {
      console.log(data.quantity - 1, "data");
      console.log(quantity - 1, "state");
    }

    setQuantity(quantity - 1);
    updateQuantity(data.id, quantity);
  };
  const increaseQuantityItem = () => {
    updateQuantity(data.id, quantity);
    if (quantity < 0) {
      setQuantity(0);
    }
    setQuantity(quantity + 1);
  };

  return (
    <>
      <a href="#" onClick={handleModal}>
        <div className="min-w-36 bg-teal-50 rounded-md">
          <img
            className="w-full rounded-t-md"
            src={`${API_URL}${data.img}`}
            alt={data.title}
          />
          <div className="flex flex-col py-6 gap-3 text-sm font-normal px-2">
            <h3 className="truncate">{data.title}</h3>
            <p className="pb-4">{data.price} ₽</p>
            {isCart && (
              <AddToCart
                quantity={data?.quantity}
                incrementQuantity={increaseQuantityItem}
                decrementQuantity={decreaseQuantityItem}
              />
            )}
          </div>
        </div>
      </a>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        data={data}
        quantity={data?.quantity}
        incrementQuantity={increaseQuantityItem}
        decrementQuantity={decreaseQuantityItem}
        addToCart={handleAddToCart}
      />
    </>
  );
}
