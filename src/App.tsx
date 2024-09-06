import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import { Cart } from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products?category=tea" />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
