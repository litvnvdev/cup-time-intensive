interface AddToCartProps {
  quantity?: number;
  incrementQuantity: (quantity: number) => void;
  decrementQuantity: (quantity: number) => void;
}

export function AddToCart({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: AddToCartProps) {
  const handleIncreaseQuantity = (quantity: any) => {
    incrementQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = (quantity: any) => {
    if (quantity > 1) {
      decrementQuantity(quantity - 1);
    }
  };
  // TODO: move butoon to shared/ui/button
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleIncreaseQuantity}
        className="flex justify-center items-center rounded border border-violet-700 px-2 text-violet-700 font-normal text-xl"
      >
        +
      </button>
      <p className="text-lg">{quantity}</p>
      <button
        onClick={handleDecreaseQuantity}
        className="flex justify-center items-center rounded border border-violet-700 px-2  text-violet-700 font-normal text-xl"
      >
        -
      </button>
    </div>
  );
}
