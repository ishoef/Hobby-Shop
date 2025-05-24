import React from "react";
import GroupCard from "../GroupCard/GroupCard";

const FeaturedGroups = ({title}) => {
  return (
    <div className="">
      <h1 className="title">{ title }</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
      </div>
      <div className="w-full mt-8 flex">
        <button className="btn btn-primary text-[16px] mx-auto">See All Groups</button>
      </div>
    </div>
  );
};

export default FeaturedGroups;
