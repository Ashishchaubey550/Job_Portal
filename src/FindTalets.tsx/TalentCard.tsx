import { Avatar, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const TalentCard = (props:any) => {
  return (
    <div className="bg-gray-200 p-4 w-[420px] capitalize flex flex-col gap-5 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-green-500">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className=" p-2 bg-gray-200 rounded-full">
            <Avatar
              className=" h-7"
              size="lg"
              src={props.image}
              alt={props.company}
            />
          </div>
          <div>
            <div className=" font-semibold text-lg">{props.name}</div>
            <div className=" text-sm text-gray-700">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <i className="ri-heart-line cursor-pointer text-lg"></i>
      </div>
      <div className=" flex gap-2 [&>div]:py-1 [&>div]:px-1 [&>div]:bg-gray-300 [&>div]:text-lime-700 [&>div]:rounded-lg text-md">
        {
            props.topSkill.map((skills:any , index:any)=>
                <div key={index}>{skills}</div>,
            )
        }
      </div>
      <Text className="!text-xs text-justify !text-gray-500" lineClamp={2}>
        {props.about}
      </Text>
      <Divider size="xs" color="teal.7" />
      <div className=" flex justify-between">
        <div className="font-semibold">&#8377; {props.expectedCtc}</div>
        <div className=" flex   gap-1 text-xs font-semibold items-center">
          <i className="ri-map-pin-line text-sky-300 text-xl h-7 w-5" /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="teal.7" />
      <div className=" flex [&>*]:w-1/2 [&>*]:p-2">
        <Link to={"/talent_Profile"}>
          <Button color="yellow.8" fullWidth variant="outline">Profile</Button>
        </Link>
        <div>
          <Button color="yellow.8" fullWidth variant="light">Message</Button>
        </div>
      </div>
    </div>
  );
}; 

export default TalentCard;
