import React from "react";

function Container({ title, children }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center lg:mx-64 lg:my-4 flex-wrap sm:my-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        style={{ height: "60vh" }}
      >
        <h4 className="lg:text-3xl md:text-2xl font-helvetica-b">{title}</h4>
        {children}
      </div>
    </>
  );
}

export default Container;
