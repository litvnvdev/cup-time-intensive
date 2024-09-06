import { ProductCard } from "../../../entities/product-card/ui/product-card";
import { PRODUCTS_DATA } from "../../../shared/consts";
import { Title } from "../../../shared/ui/title";

interface ProductListProps {
  title: string;
  btn?: React.ReactNode;
}

export function ProductList({ title, btn }: ProductListProps) {
  return (
    <div className="py-10 px-4 sm:px-12 flex flex-col gap-6">
      <Title>{title}</Title>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:gap-5">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard key={product.id} {...product} btn={btn} />
        ))}
      </div>
    </div>
  );
}
