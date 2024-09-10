import { Button } from "../../../shared/ui/button";

interface AddToCartProps {
  quantity?: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function AddToCart({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: AddToCartProps) {
  return (
    <div className="flex gap-2 items-center">
      <Button onClick={incrementQuantity}>+</Button>
      <p className="text-lg">{quantity}</p>
      <Button onClick={decrementQuantity}>-</Button>
    </div>
  );
}
