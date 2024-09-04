import { ProductCard } from "../../../entities/product-card/ui/product-card";
import { PRODUCTS_DATA } from "../../../shared/consts";

export function ProductList() {
  return (
    <div className="py-10 px-4 sm:px-12 flex flex-col gap-6">
      <h2 className="text-4xl text-violet-800 font-normal">Чай</h2>
      <div className="grid grid-cols-2 gap-2">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
