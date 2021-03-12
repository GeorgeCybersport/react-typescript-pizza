import React from "react";
import CartBottom from "../cartContent/components/CartBottom";
import CartItems from "../cartContent/components/CartItems";
import CartTop from "../cartContent/components/CartTop";
import EmptyCart from "../cartContent/components/EmptyCart";
import { connect } from "react-redux";

import { ICartState } from "../redux/reducers/cartReducer";

const Cart: React.FC<ICartState> = ({ items, totalprice, totalAmount }) => {
  return (
    <div className="content">
      {totalprice !== 0 ? (
        <div className="container container--cart">
          <div className="cart">
            <CartTop />
            <CartItems items={items} />
            <CartBottom totalprice={totalprice} totalAmount={totalAmount} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

const mapStateToProps = (state: any): ICartState => {
  return {
    items: state.cartReducer.items,
    totalprice: state.cartReducer.totalprice,
    totalAmount: state.cartReducer.totalAmount,
  };
};
export default connect(mapStateToProps)(Cart);
