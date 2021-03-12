import axios from "axios";
import { PIZZAS_TYPES } from "../keys";

export function getPizzasAction() {
  return async (dispatch: any) => {
    try {
      const result = await axios.get("http://localhost/pizzas/index.php");
      if (result.data.items) {
        dispatch({
          type: PIZZAS_TYPES.GET_PIZZAS,
          payload: result.data.items,
        });
        return true;
      }
      return false;
    } catch (error) {
      dispatch({
        type: PIZZAS_TYPES.ERROR_PIZZAS,
      });
      return false;
    }
  };
}
