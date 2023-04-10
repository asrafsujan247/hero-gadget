import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { deleteShoppingCart, removeFromDb } from "../utils/fakeDb";
import { CartContext } from "../App";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }

  // remove item from shopping cart

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  //   delete shopping cart
  const deleteCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // place order
  const orderHandler = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("Order done");
    }
    return toast.error("Cart Empty!");
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="font-semibold text-xl">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></CartItem>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button onClick={deleteCartHandler} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back To Shop</button>
            </Link>
          )}
          <button onClick={orderHandler} className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
