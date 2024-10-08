import { useContext } from "react";
import { Title } from "../../../shared/ui/title";
import {
  CartContext,
  CartContextType,
} from "../../../app/context/cart/cart-context";
import { ProductCard } from "../../../entities/product-card/ui/product-card";

export function CartContent({ title }: { title: string }) {
  const { cart } = useContext(CartContext) as CartContextType;
  return (
    <div className="py-10 px-4 sm:px-12 flex flex-col gap-6">
      <Title>{title}</Title>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:gap-5">
        {cart.length ? (
          cart.map((product: any) => (
            <ProductCard isCart={true} key={product.id} data={product} />
          ))
        ) : (
          <p className="text-center text-2xl">Корзина пуста</p>
        )}
      </div>
    </div>
  );
}
