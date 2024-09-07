import { createPortal } from "react-dom";
import { API_URL } from "../../../api/base";
import { CloseIcon } from "../../close-icon";
import { Button } from "../../button";
import { Additional } from "../../../../entities/product-card/ui/product-card";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  img: string;
  additional: Additional;
  price: number;
  btn: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  img,
  price,
  additional,
  btn,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  console.log(additional);
  return createPortal(
    <div className="fixed w-full min-h-screen top-0 flex flex-col justify-center bg-slate-700 bg-opacity-90">
      <div className="relative container mx-auto flex flex-col text-lg max-w-[336px] h-fit pb-4 bg-neutral-100 rounded-lg">
        <div className="flex flex-col gap-3">
          <img
            className="w-full rounded-t-md"
            src={`${API_URL}${img}`}
            alt={title}
          />
          <div className="flex flex-col gap-3 px-4">
            <h2>{title}</h2>

            <p>{price} ₽</p>
            <ul className="flex flex-col">
              {Object.entries(additional).map(([key, value]) => (
                <li key={key}>
                  <li className="text-gray-400 flex justify-between text-sm">
                    <p>{key}:</p>
                    <p className="text-neutral-900">{value}</p>
                  </li>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              {btn}
              <Button>Добавить</Button>
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
