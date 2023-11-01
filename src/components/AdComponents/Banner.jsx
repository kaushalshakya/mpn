import React from "react";

const Banner = (props) => {
  return (
    <div className="rounded-md flex flex-col gap-5 bg-white p-5">
      <h1 className="font-bold">{props.title}</h1>
      <div
        className={`bg-[#9983ca] w-[${props.width}px] h-[${
          props.height
        }px] flex flex-col ${
          props.ml && `lg:ml-[${props.ml}px]`
        } text-center items-center justify-center gap-2 text-white ${
          props.w && `w-[${props.w}px]`
        }`}
      >
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-lg font-semibold">
          Size: {props.width} x {props.height}px (width x height)
        </p>
      </div>
      <p>{props.description}</p>
      <p className="text-blue-500">
        Size: {props.width} x {props.height}px (width x height)
      </p>
    </div>
  );
};

export default Banner;
