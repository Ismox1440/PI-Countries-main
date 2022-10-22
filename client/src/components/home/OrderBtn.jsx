import React from "react";
import { useSelector } from "react-redux";

const OrderBtn = ({ orderName, s, handleClick, numerical = false }) => {
  const { order } = useSelector((state) => state.navigation);

  return (
    <button
      className={s.orderBtn}
      name={numerical ? "numerical" : orderName}
      disabled={order[numerical ? 0 : 1] === orderName}
      onClick={handleClick}
      id={orderName}
    >
      {orderName}
    </button>
  );
};

export default OrderBtn;
