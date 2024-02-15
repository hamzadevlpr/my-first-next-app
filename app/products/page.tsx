"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {products.length === 0 && (
        <div>
          {products.map(({ title, price }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <h1 className="text-6xl font-bold text-black">{title}</h1>
                <p className="text-2xl font-semibold">{price}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
