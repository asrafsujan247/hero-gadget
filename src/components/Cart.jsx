import React from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { cartArray } = useLoaderData();

  let total = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total = total + product.price * product.quantity;
    }
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="font-semibold text-xl">
          {cartArray.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartArray.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </ul>
        <p>total:{total}</p>
      </div>
    </div>
  );
};

export default Cart;
