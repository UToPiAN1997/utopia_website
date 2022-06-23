import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" my-6 flex flex-col items-start text-center transition hover:-translate-y-2 px-4 group"
    >
      <div className="">
        <img className="rounded-lg drop-shadow-lg" src={item.image} alt="" />
      </div>
      <h3 className="mt-4 cheader4 font-bold capitalize">{item.name}</h3>
      <div className="mt-2 py-1 px-4 rounded-md bg-transparent border-2 border-primary items-center">
        <p className="capitalize text-primary cpsmall">{item.category}</p>
      </div>
      {/* <p className="cpregular font-normal max-w-md text-left mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p> */}
    </div>
  );
};

export default Project;
