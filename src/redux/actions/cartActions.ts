import { CART_TYPES } from "../keys";
import { ICartItem } from "../reducers/cartReducer";

interface IActionItem {
  dough: string;
  id: number;
  name: string;
  price: number;
  size: number;
  url: string;
}

export const addPizzaToCart = (pizzaObj: IActionItem) => ({
  type: CART_TYPES.ADD_PIZZA,
  payload: pizzaObj,
});
export const clearCart = () => ({
  type: CART_TYPES.CLEAR_CART,
});
export const minusCartItem = (pizzaObj: ICartItem) => ({
  type: CART_TYPES.MINUS_PIZZA,
  payload: pizzaObj,
});
export const removeCartItem = (pizzaObj: ICartItem) => ({
  type: CART_TYPES.REMOVE_PIZZA,
  payload: pizzaObj,
});
