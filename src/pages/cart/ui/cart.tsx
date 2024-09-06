import { Layout } from "../../../app/layout";
import { AddToCart } from "../../../features/cart";
import { Order } from "../../../widgets/order";
import { ProductList } from "../../../widgets/products-list";

export function Cart() {
  return (
    <Layout>
      <section className="mt-20 flex flex-col lg:grid lg:grid-cols-2">
        <div className="mt-8 bg-teal-50 rounded-md px-4 sm:px-12 py-4 lg:mr-12 lg:mt-24 lg:h-24 lg:w-1/2 lg:order-2 lg:justify-self-end ">
          <div className="flex justify-between">
            <div className="flex flex-col gap-0.5 text-neutral-900 ">
              <p>Итого:</p>
              <p>2200 ₽</p>
            </div>
            <button className="cursor-pointer bg-inherit border border-violet-700 text-violet-700 rounded py-3 px-4 font-normal">
              Заказать
            </button>
          </div>
        </div>
        <ProductList title="Корзина (6)" btn={<AddToCart />} />
      </section>
      <Order />
    </Layout>
  );
}
