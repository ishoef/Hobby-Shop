import React, { useEffect } from "react";
import GroupTableRow from "../GroupTableRow/GroupTableRow";

const CreatedGroups = ({groupsData}) => {
  useEffect(() => {
    document.title = "Error | Hobby Shop";
  }, []);
 
  console.log(groupsData);

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
            {groupsData.map((group) => (
                <GroupTableRow key={group._id} group={group} ></GroupTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatedGroups;
