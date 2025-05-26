import React from "react";

const ItemsLoader = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
         {/* <!-- Header --> */}
         <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
         {/* <!-- Body --> */}
         <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
         <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
         <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
         {/* <!-- Header --> */}
         <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
         {/* <!-- Body --> */}
         <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
         <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
         <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ItemsLoader;
