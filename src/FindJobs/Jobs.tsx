import React from "react";
import Sort from "./Sort";
import JobCard from "./JobCard";
import jobcardData from "../Data/JobCardData";

const Jobs = () => {
  return (
    <div className="px-6 py-6">
      <div className=" flex justify-between">
        <div className="text-2xl font-semibold">Recomanded Jobs</div>
        <Sort />
      </div>
      <div className=" flex flex-wrap mt-10 gap-5">
      {
        jobcardData.map((job,index)=><JobCard key={index} {...job} />)
      }
      </div>
    </div>
  );
};

export default Jobs;
