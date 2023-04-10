import React from "react";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const productData = useLoaderData();
  console.log(productData);
  return <div>shop compo :{productData.length}</div>;
};

export default Shop;
