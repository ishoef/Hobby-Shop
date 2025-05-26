import React from "react";
import GroupCard from "../GroupCard/GroupCard";
import { useNavigate } from "react-router";

const FeaturedGroups = ({ title, showSeeAll, groupsData }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <h1 className="title">{title}</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
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
