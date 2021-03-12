import { PIZZAS_TYPES, STATUSES } from "../keys";
export interface IItem {
  doughId: number[];
  id: number;
  name: string;
  price: number[];
  sizeId: number[];
  url: string;
}
export interface ICatalogState {
  items: IItem[];
  status: STATUSES;
}
const initialState: ICatalogState = {
  items: [],
  status: STATUSES.LOADING,
};

export const catalogReducer = (
  state: ICatalogState = initialState,
  action: any
) => {
  if (action.type === PIZZAS_TYPES.GET_PIZZAS) {
    return {
      ...state,
      items: action.payload,
      status: STATUSES.LOADED,
    };
  }
  return state;
};
