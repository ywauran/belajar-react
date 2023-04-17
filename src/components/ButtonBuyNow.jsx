import React from "react";
import { Link } from "react-router-dom";

const ButtonBuyNow = ({ name, id }) => {
  return (
    <>
      <Link
        to={`/detail/${id}`}
        className="bg-[#C93D8D] text-center text-white font-semibold mt-2 w-full py-2 rounded-lg"
      >
        {name}
      </Link>
    </>
  );
};

export default ButtonBuyNow;
