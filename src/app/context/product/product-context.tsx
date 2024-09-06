import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../../../shared/api/base";

interface IProduct {
  id: number;
  title: string;
  img: string;
  price: number;
}

interface IProductContext {
  children: React.ReactNode;
  products?: IProduct[] | undefined;
  category?: string;
  setCategory?: () => void;
  setProducts?: () => void;
}

const ProductContext = createContext<any>(null);

export const ProductProvider = ({ children }: IProductContext) => {
  const [products, setProducts] = useState<IProductContext>();
  const [category, setCategory] = useState<any>("");

  const getProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/products/${category}`);
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category) {
      getProducts();
    }
  }, [category]);
  return (
    <ProductContext.Provider value={{ products, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
