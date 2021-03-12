import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { catalogReducer } from "./reducers/catalogReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  catalogReducer,
  cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
