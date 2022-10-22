import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNavigation } from "../../redux/actions";
import s from "./home.module.css";
import OrderBtn from "./OrderBtn";

const OrderButtons = () => {
  const navigation = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const {name, id} = e.target
    const newOrder = name === 'numerical' ? [id, navigation.order[1]] : [navigation.order[0], name]
    dispatch(setNavigation({...navigation, order: newOrder}))
  } 


  return (
    <div className={s.orderContainer}>
      <OrderBtn orderName={'population'} s={s}  handleClick={handleClick} />
      <OrderBtn orderName={'alphabetically'} s={s}  handleClick={handleClick} />
      <OrderBtn orderName={'desc'} s={s}  handleClick={handleClick} numerical={true}/>
      <OrderBtn orderName={'asc'} s={s}  handleClick={handleClick} numerical={true}/>
    </div>
  );
};

export default OrderButtons;
