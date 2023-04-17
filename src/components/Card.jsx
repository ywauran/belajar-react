import React from "react";
import ButtonBuyNow from "./ButtonBuyNow";
import ImageOne from "../assets/img-one.png";
import { Link } from "react-router-dom";

const Card = ({ name, price, id }) => {
  return (
    <>
      <div className="bg-[#1F0443] flex flex-col w-max p-4 rounded-xl space-y-2">
        <img src={ImageOne} alt="" />
        <div className="text-white">
          <div className="flex justify-between">
            <div>
              <h4>{name}</h4>
              <h3 className="font-semibold">{name}</h3>
            </div>
            <div className="text-right">
              <h5>Price</h5>
              <p className="font-semibold">{price}</p>
            </div>
          </div>
        </div>
        <ButtonBuyNow name="Detail" id={id} />
      </div>
    </>
  );
};

export default Card;
