import { ActionIcon, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import JobDescriptionData from "../Data/JobDescriptionData";
import {
  IconMapPin,
  IconBriefcase,
  IconPremiumRights,
  IconRecharging,
} from "@tabler/icons-react";

const iconMap: Record<string, React.ElementType> = {
  IconMapPin,
  IconBriefcase,
  IconPremiumRights,
  IconRecharging,
};

const JobDesc = () => {
  // Destructure data from JobDescriptionData
  const { Desccard, desc, skills } = JobDescriptionData;

  return (
    <div className="w-2/3">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-gray-200 rounded-md">
            <img src="src/assets/av1.png" alt="Company Logo" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">Software Developer</div>
            <div className="text-lg text-gray-700">
              Google &#x2022; Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply_job">
            <Button color="teal.5" variant="light" size="sm">
              Apply
            </Button>
          </Link>
          <i className="ri-bookmark-line cursor-pointer text-lg"></i>
        </div>
      </div>

      {/* Descriptive Cards Section */}
      <div className="flex gap-4 mt-3 justify-between">
        {Desccard.map((item: any, index: number) => {
          // Map icon string to actual React component
          const IconComponent = iconMap[item.icon];

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1 p-3 border rounded-md shadow-sm bg-white"
            >
              <ActionIcon
                color="green.3"
                className="!h-12 !w-12"
                variant="filled"
                radius="md"
                aria-label={item.name}
              >
                {IconComponent && (
                  <IconComponent className="h-4/5 w-4/5" stroke={1.5} />
                )}
              </ActionIcon>
              <div className="text-sm text-gray-700">{item.name}</div>
              <div className="font-semibold">{item.value}</div>
            </div>
          );
        })}
      </div>
      <div>
        <div className=" text-xl font-semibold mb-5">Required SKills</div>
        <div className="flex flex-wrap gap-2">
            {
                skills.map((elem,index)=>            <ActionIcon key={index} color="green.3"
                className=" font-sm !h-fit !w-fit"
                variant="filled"
                radius="md" p="xs">
                {elem}
            </ActionIcon>)
            }
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html:desc}}>

      </div>
    </div>
  );
};

export default JobDesc;
