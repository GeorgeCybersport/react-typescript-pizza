import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Index from "./pages/Index";
import { getPizzasAction } from "./redux/actions/getPizzasAction";

const url: string =
  "https://raw.githubusercontent.com/Archakov06/react-pizza/3ec8784b81432f22d8fe95235ae055db05ff0d09/src/assets/img/";
export const Url = React.createContext<string>(url);

const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect((): void => {
    dispatch(getPizzasAction());
  }, []);
  return (
    <Url.Provider value={url}>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </Url.Provider>
  );
};

export default App;
