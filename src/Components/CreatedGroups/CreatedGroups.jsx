import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { LuFileX2 } from "react-icons/lu";
import { PiMaskHappyFill } from "react-icons/pi";
import NoCreatedGroups from "../NoCreatedGroups/NoCreatedGroups";
import { IoCreateOutline } from "react-icons/io5";
import { MdDelete} from "react-icons/md";

const CreatedGroups = () => {
  useEffect(() => {
    document.title = "Error | Hobby Shop";
  }, []);

  const location = useLocation();
  const data = location.state;
  console.log("from my groups",data);

  if (!data) {
    return <NoCreatedGroups></NoCreatedGroups>
  }
  
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10">
      <h1 className="title text-center">My Groups</h1>
      <div className="overflow-x-auto">
        <table className="table table-lg border border-[#FF6B3580] rounded-2xl">
          <thead>
            <tr className="bg-primary text-white text-[18px]">
              <th>Image</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Members</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
              <td className=" space-y-3 ">
                <button className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded">
                  <IoCreateOutline color="white" />
                </button>
                <div className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded">
                  <MdDelete color="white" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
              <td className=" space-y-3 ">
                <button className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded">
                  <IoCreateOutline color="white" />
                </button>
                <div className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded">
                  <MdDelete color="white" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatedGroups;
