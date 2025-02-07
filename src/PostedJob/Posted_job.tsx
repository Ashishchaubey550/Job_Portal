import { Tabs } from "@mantine/core";
import PostedJobData from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const Posted_jobs = () => {
  const { activejobs ,draftjobs  } = PostedJobData;

  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5">Posted job</div>
      <div>
        <Tabs
          color="teal.5"
          autoContrast
          variant="pills"
          defaultValue="gallery"
        >
          <Tabs.List className="[&_button[aria-selected='false']]:bg-gray-700 font-medium">
            <Tabs.Tab value="active">Active</Tabs.Tab>
            <Tabs.Tab value="draft">Draft</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div>
              {activejobs.map((elem: any, index: any) => (
                <PostedJobCard key={index} {...elem} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">
            <div>
                {
                    draftjobs.map((elem:any,index:any)=> <PostedJobCard key={index} {...elem}/> )
                }
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Posted_jobs;
