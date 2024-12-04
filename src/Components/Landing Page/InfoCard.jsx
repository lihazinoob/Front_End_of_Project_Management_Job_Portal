import React from "react";

const InfoCard = () => {
  return (
    <div className="text-white grid grid-cols-3 items-center gap-20 animate-fadeIn">
      <article className="w-72 h-40 flex flex-col justify-center items-center bg-cardcolor shadow p-4 rounded-md hover:-translate-y-2 duration-300">
        <div className="text-center">
          <h1 className="text-4xl tracking-widest">200+</h1>
          <p className="text-md">USERS</p>
        </div>
      </article>
      <article className="w-72 h-40 flex flex-col justify-center items-center bg-cardcolor shadow p-4 rounded-md hover:-translate-y-2 duration-300">
        <div className="text-center">
          <h1 className="text-4xl tracking-widest">200+</h1>
          <p className="text-md">USERS</p>
        </div>
      </article>
      <article className="w-72 h-40 flex flex-col justify-center items-center bg-cardcolor shadow p-4 rounded-md hover:-translate-y-2 duration-300">
        <div className="text-center">
          <h1 className="text-4xl tracking-widest">200+</h1>
          <p className="text-md">USERS</p>
        </div>
      </article>
    </div>
  );
};

export default InfoCard;
