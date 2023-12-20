import React from "react";

const Button = ({ title }: any) => {
  return (
    <button className=" text-lg w-[180px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-4">
      {title}
    </button>
  );
};

export default Button;
