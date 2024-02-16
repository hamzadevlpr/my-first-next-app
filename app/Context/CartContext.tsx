"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";

type DataType = {
  firstName: string;
};

interface ProductType {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

interface ContextProps {
  items: ProductType[] | null;
  setItems: Dispatch<SetStateAction<ProductType[] | null>>;
  itemCount: number;
  setItemCount: Dispatch<SetStateAction<number>>;
  addProduct: (product: ProductType) => void;
  productQuantities: Record<number, number>;
  setProductQuantities: Dispatch<SetStateAction<Record<number, number>>>;
}

const CartContext = createContext<ContextProps>({
  items: null,
  setItems: (): void => {},
  itemCount: 0,
  setItemCount: (): void => {},
  addProduct: (): void => {},
  productQuantities: {},
  setProductQuantities: (): void => {},
});

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ProductType[] | null>(null);
  const [itemCount, setItemCount] = useState<number>(0);
  const [productQuantities, setProductQuantities] = useState<
    Record<number, number>
  >({});

  const addProduct = (product: ProductType) => {
    setItems((prevItems) => (prevItems ? [...prevItems, product] : [product]));
    setItemCount((prevCount) => prevCount);

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));

  };

  return (
    <CartContext.Provider
      value={{
        itemCount,
        setItemCount,
        items,
        setItems,
        addProduct,
        productQuantities,
        setProductQuantities,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
