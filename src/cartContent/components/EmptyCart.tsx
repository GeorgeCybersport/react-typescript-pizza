import React from "react";

import { Link } from "react-router-dom";

import { Url } from "../../App";

interface EmptyCartProps {}

const EmptyCart: React.FC<EmptyCartProps> = () => {
  const imgUrl: string = React.useContext<string>(Url);
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={imgUrl + "empty-cart.png"} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
