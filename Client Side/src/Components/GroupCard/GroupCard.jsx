import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { MdDateRange, MdOutlineCreate } from "react-icons/md";

const GroupCard = () => {
  return (
    <div>
      <div className="hover:scale-102 transition-all border border-gray-300 flex flex-col w-full rounded-xl shadow cursor-pointer pb-5">
        <div className="w-full">
          <img
            className="w-full rounded-t-xl h-40 md:h-50 lg:h-60"
            src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="w-full gap-4 px-6 py-5">
          <div className="w-full">
            <h1 className="font-semibold text-primary text-[18px]">
              Group Name
            </h1>
            <p className="text-gray-400 mb-2">Category</p>
          </div>
          <div className="mb-2">
            <p className="flex items-center gap-2">
              <MdOutlineCreate />
              Group Creator
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <MdDateRange />
              Current Date
            </p>
          </div>
          <div className="flex justify-between">
            <p className="flex items-center gap-2">
              {" "}
              <HiUsers />
              All Member
            </p>
            <p className="flex items-center gap-2">
              <ImLocation />
              Location
            </p>
          </div>
        </div>
        <button className="btn btn-primary mx-6 text-[17px">See More</button>
      </div>
    </div>
  );
};

export default GroupCard;
