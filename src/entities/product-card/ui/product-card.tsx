import { useState } from "react";
import { API_URL } from "../../../shared/api/base";
import { Modal } from "../../../shared/ui/modal";
import { AddToCart } from "../../../features/cart";

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

export function ProductCard({
  data,
  isCart,
  incrementQuantity,
  decrementQuantity,
}: ProductCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="min-w-36 bg-teal-50 rounded-md">
        <img
          className="w-full rounded-t-md"
          src={`${API_URL}${data.img}`}
          alt={data.title}
        />
        <div className="flex flex-col mt-8 gap-8 text-sm font-normal px-2">
          <h3 className="truncate">{data.title}</h3>
          {isCart && (
            <a href="#" onClick={handleModal}>
              <AddToCart
                quantity={data?.quantity}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            </a>
          )}
          <p className="pb-4">{data.price} ₽</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={handleModal} data={data} />
    </>
  );
}
