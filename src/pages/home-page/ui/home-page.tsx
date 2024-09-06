import { Layout } from "../../../app/layout";
import { Hero } from "../../../widgets/hero";
import { ProductList } from "../../../widgets/products-list";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Layout>
        <ProductList />
      </Layout>
    </div>
  );
}
