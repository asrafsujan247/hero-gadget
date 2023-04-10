import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const productData = useLoaderData();

  //   cart button handler
  const handleAddToCart = (id) => {
    console.log(id);
  };

  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
