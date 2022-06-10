import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" my-4 flex flex-col items-start text-center transition hover:-translate-y-2 px-4"
    >
      <div className="">
        <img className="rounded-lg" src={item.image} alt="" />
      </div>
      <div className="mt-4 py-1 px-4 rounded-md bg-transparent border-2 border-primary items-center">
        <p className="capitalize text-primary text-ps">{item.category}</p>
      </div>
      <h3 className="mt-2 text-h4 font-extrabold capitalize">{item.name}</h3>
      <p className="text-pr font-normal max-w-md text-left mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
    </div>
  );
};

export default Project;
