import { Layout } from "./app/layout";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";

function App() {
  return (
    <Layout>
      <Header />
      <main className="min-h-[35dvh]">Main content</main>
      <Footer />
    </Layout>
  );
}

export default App;
