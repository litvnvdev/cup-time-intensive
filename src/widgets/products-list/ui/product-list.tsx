import { useEffect } from "react";
import { ProductCard } from "../../../entities/product-card/ui/product-card";
import { Title } from "../../../shared/ui/title";
import { useProducts } from "../../../app/context/product/product-context";
import { useSearchParams } from "react-router-dom";
import { HEADER_DATA } from "../../../shared/consts";
import { SkeletonLoader } from "../../../app/layout/skeleton-loader";

interface ProductListProps {
  btn?: React.ReactNode;
  title?: string;
}

export function ProductList({ title }: ProductListProps) {
  const { products, setCategory } = useProducts();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const displayCurrentCategory = (category: string | null) => {
    const newCategory = HEADER_DATA.find((item) => item.category === category);
    return newCategory?.title;
  };
  const productCategory = displayCurrentCategory(category);

  useEffect(() => {
    setCategory(category);
  }, [setCategory, category]);

  return (
    <div className="py-10 px-4 sm:px-12 flex flex-col gap-6">
      <Title>{productCategory || title}</Title>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:gap-5">
        {products ? (
          products.map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  );
}
