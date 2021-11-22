import React from "react";

import "./ProductCard.css";

const ProductCard = ({ car, getInfo }) => {
//   console.log("this is getInfo", getInfo);
  return (
    <div>
      <div className="car-desc">
        <h2 onClick={() => getInfo(car)}>{car.model}</h2>
        <h3>Order Online for Touchless Delivery Custom Order</h3>
      </div>
      <img className="car-image" src={car.image} alt="" />
    </div>
  );
};

export default ProductCard;
