import React from "react";

const Carousel = ({ Component, queryKey, endpoint, title }) => {
  return (
    <div className="bg-white text-black p-5 gap-5 rounded-md w-full flex flex-col ">
      <div className="flex items-center w-full justify-between ">
        <h1 className={"font-extrabold text-xl"}>{title}</h1>
        <p className="text-primary cursor-pointer">View All</p>
      </div>
      <Component queryKey={queryKey} endpoint={endpoint} />
    </div>
  );
};

export default Carousel;
