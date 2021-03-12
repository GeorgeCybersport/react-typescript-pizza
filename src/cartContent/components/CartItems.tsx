import React from "react";
import CartItem from "./CartItem";
import { ICartItem } from "../../redux/reducers/cartReducer";

interface CartItemsProps {
  items: ICartItem[];
}

const CartItems: React.FC<CartItemsProps> = ({ items }) => {
  return (
    <div className="content__items">
      {items.map((item: ICartItem, index: number) => (
        <CartItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CartItems;
