import { useContext, useState } from "react";
import { Title } from "../../../shared/ui/title";
import {
  CartContext,
  CartContextType,
} from "../../../app/context/cart/cart-context";
import { ProductCard } from "../../../entities/product-card/ui/product-card";
import { SkeletonLoader } from "../../../app/layout/skeleton-loader";

export function CartContent({ title }: { title: string }) {
  const [quantity, setQuantity] = useState<number>(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const { cart } = useContext(CartContext) as CartContextType;
  return (
    <div className="py-10 px-4 sm:px-12 flex flex-col gap-6">
      <Title>{title}</Title>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:gap-5">
        {cart.length ? (
          cart.map((product: any) => (
            <ProductCard
              isCart={true}
              key={product.id}
              data={product}
              incrementQuantity={increaseQuantity}
              decrementQuantity={decreaseQuantity}
            />
          ))
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  );
}
