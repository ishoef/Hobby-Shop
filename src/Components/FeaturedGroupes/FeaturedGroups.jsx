import React from "react";
import GroupCard from "../GroupCard/GroupCard";
import { useNavigate } from "react-router";

const FeaturedGroups = ({className, title, showSeeAll, groupsData }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      
      <h1 className="title text-center">{title}</h1>

      <div className={className}>
        {groupsData.map((group) => (
          <GroupCard key={group._id} group={group}></GroupCard>
        ))}
      </div>
          
      {showSeeAll && (
        <div className="w-full mt-8 flex">
          <button
            onClick={() => {
              navigate("/allgroups");
              window.scrollTo({
                top: 0,
                behavior: "instant",
              });
            }}
            className="btn btn-primary text-[16px] mx-auto"
          >
            See All Groups
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedGroups;
