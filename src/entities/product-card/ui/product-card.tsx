import { useState } from "react";
import { API_URL } from "../../../shared/api/base";
import { Modal } from "../../../shared/ui/modal";
import { AddToCart } from "../../../features/cart";

interface ProductCardProps {
  title: string;
  img: string;
  additional: Additional;
  price: number;
  btn?: React.ReactNode;
}

export interface Additional {
  [key: string]: string;
}

export function ProductCard({
  title,
  img,
  price,
  btn,
  additional,
}: ProductCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a href="#" onClick={handleModal}>
        <div className="min-w-36 bg-teal-50 rounded-md">
          <img
            className="w-full rounded-t-md"
            src={`${API_URL}${img}`}
            alt={title}
          />
          <div className="flex flex-col mt-8 gap-8 text-sm font-normal px-2">
            <h3 className="truncate">{title}</h3>
            {btn}
            <p className="pb-4">{price} ₽</p>
          </div>
        </div>
      </a>
      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        title={title}
        img={img}
        price={price}
        additional={additional}
        btn={<AddToCart />}
      />
    </>
  );
}
