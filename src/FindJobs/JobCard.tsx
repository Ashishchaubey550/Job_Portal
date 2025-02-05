import { Divider, MenuDivider, Text } from "@mantine/core";
import React from "react";

const JobCard = (props:any) => {
  return (
    <div className="bg-gray-200 p-4 w-[350px] capitalize flex flex-col gap-5 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-green-500">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className=" p-2 bg-gray-200 rounded-md">
            <img src={props.logo} alt={props.company} />
          </div>
          <div className=" flex flex-col gap-1">
            <div className=" font-semibold">{props.jobTitle}</div>
            <div className=" text-xs text-gray-700">{props.comapny} &#x2022; {props.applicants} Applicants</div>
          </div>
        </div>
        <i className="ri-bookmark-line cursor-pointer text-lg"></i>
      </div>
      <div className=" flex gap-2 [&>div]:py-1 [&>div]:px-1 [&>div]:bg-gray-300 [&>div]:text-lime-700 [&>div]:rounded-lg text-md">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text className="!text-xs text-justify !text-gray-500" lineClamp={2}>{props.Description}</Text>
      <Divider size="xs" color="teal.7"/>
      <div className=" flex justify-between">
        <div className="font-semibold">
            &#8377; {props.package}
        </div>
        <div className=" flex   gap-1 text-xs font-semibold items-center">
        <i className="ri-time-line text-xl h-7 w-5"/> {props.postedDayAgo}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
