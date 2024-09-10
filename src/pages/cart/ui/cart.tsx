import { useContext } from "react";
import { Layout } from "../../../app/layout";
import { Button } from "../../../shared/ui/button";
import { CartContent } from "../../../widgets/cart";
import { Order } from "../../../widgets/order";
import {
  CartContext,
  CartContextType,
} from "../../../app/context/cart/cart-context";

export function Cart() {
  const { clearCart, cart } = useContext(CartContext) as CartContextType;

  return (
    <Layout>
      <section className="mt-20 flex flex-col lg:grid lg:grid-cols-2">
        <div className="flex justify-center mt-8 bg-teal-50 rounded-md px-4 sm:px-12 py-4 md:flex-row lg:justify-start lg:mr-12 lg:mt-24 lg:h-fit lg:w-1/2 lg:order-2 lg:justify-self-end ">
          <div className="flex flex-col gap-2 max-w-44 items-center lg:items-start">
            <div className="flex flex-col gap-0.5 text-neutral-900 ">
              <p>Итого:</p>
              <p>
                {cart?.reduce((prev, current) => (prev += current.price), 0)} ₽
              </p>
            </div>
            <Button>Заказать</Button>
            <Button onClick={clearCart}>Очистить корзину</Button>
          </div>
        </div>
        <CartContent title="Корзина" />
      </section>
      <Order />
    </Layout>
  );
}
