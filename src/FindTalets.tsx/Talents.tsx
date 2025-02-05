import React from "react";
import Sort from "../FindJobs/Sort";
import TalentData from "../Data/TalentData";
import TalentCard from "./TalentCard";
import RecomandedTalents from "./RecomandedTalents";

const Talents = () => {
  return (
    <div className="px-6 py-6">
      <div className=" flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort/>
      </div>
      <div className=" flex flex-wrap mt-10 gap-5 justify-evenly">
        {
          TalentData.map((Talent , index)=><TalentCard key={index} {...Talent}/>)
        }
      </div>
    </div>
  );
};

export default Talents;
