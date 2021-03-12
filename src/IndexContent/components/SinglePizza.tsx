import React from "react";

import { useDispatch } from "react-redux";
import classNames from "classnames";

import { IItem } from "../../redux/reducers/catalogReducer";
import { addPizzaToCart } from "../../redux/actions/cartActions";

interface SinglePizzaProps {
  item: IItem;
}

const SinglePizza: React.FC<SinglePizzaProps> = ({ item }) => {
  const dispatch = useDispatch();
  const width: number[] = [26, 30, 40];
  const dough: string[] = ["тонкое", "толстое"];
  const [activeDough, setActiveDough] = React.useState<number>(
    item.doughId[0] - 1
  );
  const [activeWidth, setActiveWidth] = React.useState<number>(
    item.sizeId[0] - 1
  );
  const [activePrice, setActivePrice] = React.useState<number>(item.price[0]);
  const changeSize = (data: any, index: number): void => {
    !data.classList.contains("disabled") && setActiveWidth(index);
  };
  const changePrice = (index: number) => {
    const priceIndex: number = item.sizeId.indexOf(index + 1);
    setActivePrice(item.price[priceIndex]);
  };
  const handleAdd = () => {
    const obj = {
      id: item.id,
      name: item.name,
      url: item.url,
      dough: dough[activeDough],
      price: activePrice,
      size: width[activeWidth],
    };
    dispatch(addPizzaToCart(obj));
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={item.url} alt="Pizza" />
      <h4 className="pizza-block__title">{item.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {dough.map((val, index: number) => (
            <li
              onClick={() => setActiveDough(index)}
              key={index}
              className={classNames({
                active: activeDough === index,
                disabled: !item.doughId.includes(index + 1),
              })}
            >
              {val}
            </li>
          ))}
        </ul>
        <ul>
          {width.map((val, index) => (
            <li
              onClick={(event) => {
                changeSize(event.target, index);
                changePrice(index);
              }}
              key={index}
              className={classNames({
                active: activeWidth === index,
                disabled: !item.sizeId.includes(index + 1),
              })}
            >
              {val} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">От {activePrice} ₽</div>
        <div onClick={handleAdd} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default SinglePizza;
