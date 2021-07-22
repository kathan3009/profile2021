import React from "react";

function Navbar() {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex items-center justify-center sm:justify-between lg:mx-32 lg:my-4 hidden sm:block sm:mx-8 md:mx-8">
        <h2 className="lg:text-3xl md:text-3xl xs:text:2xl font-helvetica-b text-gray-700 hover:text-blue-600">
          Kathan
        </h2>
        {/* <div className="flex items-center justify-between lg:text-1xl md:text-1xl font-helvetica-b">
          <h2 className="m-2 hover:text-pink-600">Skills</h2>
          <h2 className="m-2 hover:text-pink-600">Projects</h2>
          <h2 className="m-2 hover:text-pink-600">Experience</h2>
          <h2 className="m-2 hover:text-pink-600">Gallery</h2>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
