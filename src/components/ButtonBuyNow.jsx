import React from "react";

const ButtonBuyNow = ({ name }) => {
  return (
    <>
      <button className="bg-[#C93D8D] text-white font-semibold mt-2 w-full py-2 rounded-lg">
        {name}
      </button>
    </>
  );
};

export default ButtonBuyNow;
