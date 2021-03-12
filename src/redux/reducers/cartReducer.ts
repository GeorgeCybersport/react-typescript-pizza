import { CART_TYPES } from "../keys";
export interface ICartItem {
  dough: string;
  id: number;
  name: string;
  price: number;
  size: number;
  url: string;
  amount: number;
  subTotal: number;
}
export interface ICartState {
  totalprice: number;
  items: ICartItem[];
  totalAmount: number;
}
const initialState: ICartState = {
  totalprice: 0,
  items: [],
  totalAmount: 0,
};
const getTotalPrice = (arr: ICartItem[]): number =>
  arr.reduce((sum, obj) => obj.subTotal + sum, 0);
const getTotalAmount = (arr: ICartItem[]): number =>
  arr.reduce((sum, obj) => obj.amount + sum, 0);

export const cartReducer = (
  state: ICartState = initialState,
  action: any
): ICartState => {
  switch (action.type) {
    case CART_TYPES.ADD_PIZZA: {
      const index: number = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.price === action.payload.price &&
          item.dough === action.payload.dough
      );
      if (index === -1) {
        const items: ICartItem[] = [
          ...state.items,
          {
            ...action.payload,
            amount: 1,
            subTotal: action.payload.price,
          },
        ];
        return {
          totalprice: getTotalPrice(items),
          items,
          totalAmount: getTotalAmount(items),
        };
      } else {
        state.items[index].amount++;
        state.items[index].subTotal += state.items[index].price;
        return {
          ...state,
          totalprice: getTotalPrice(state.items),
          totalAmount: getTotalAmount(state.items),
        };
      }
    }
    case CART_TYPES.MINUS_PIZZA: {
      const index: number = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.price === action.payload.price &&
          item.dough === action.payload.dough
      );
      console.log(index);
      state.items[index].amount--;
      state.items[index].subTotal -= state.items[index].price;
      return {
        ...state,
        totalprice: getTotalPrice(state.items),
        totalAmount: getTotalAmount(state.items),
      };
    }
    case CART_TYPES.REMOVE_PIZZA: {
      const index: number = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.price === action.payload.price &&
          item.dough === action.payload.dough
      );
      state.items.splice(index, 1);
      return {
        ...state,
        totalprice: getTotalPrice(state.items),
        totalAmount: getTotalAmount(state.items),
      };
    }
    case CART_TYPES.CLEAR_CART:
      return { ...initialState };
    default:
      return state;
  }
};
