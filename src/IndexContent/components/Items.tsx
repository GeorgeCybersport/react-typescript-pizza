import React from "react";
import SinglePizza from "./SinglePizza";
//import { items } from "../data/itemsData";
import { connect } from "react-redux";
import { ICatalogState, IItem } from "../../redux/reducers/catalogReducer";
import { STATUSES } from "../../redux/keys";

const Items: React.FC<ICatalogState> = ({ items, status }) => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === STATUSES.LOADED && (
          <>
            {items.map((item: IItem, index: number) => (
              <SinglePizza item={item} key={index} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.catalogReducer.items,
    status: state.catalogReducer.status,
  };
};

export default connect(mapStateToProps)(Items);
