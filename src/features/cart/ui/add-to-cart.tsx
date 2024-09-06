import { useState } from "react";

export function AddToCart() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };
  // TODO: move butoon to shared/ui/button
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={incrementQuantity}
        className="flex justify-center items-center rounded border border-violet-700 px-2 text-violet-700 font-normal text-xl"
      >
        +
      </button>
      <p className="text-lg">{quantity}</p>
      <button
        onClick={decrementQuantity}
        className="flex justify-center items-center rounded border border-violet-700 px-2  text-violet-700 font-normal text-xl"
      >
        -
      </button>
    </div>
  );
}
