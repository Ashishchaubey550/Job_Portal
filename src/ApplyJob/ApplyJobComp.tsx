import { Button, FileInput, NumberInput, Textarea, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

const ApplyJobComp = () => {
  return (
    <div className=" w-2/4 mx-auto mt-2 flex-col gap-1">
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
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Full Name" placeholder="Enter Name" withAsterisk/>
        <TextInput label="Email" placeholder="Enter Email" withAsterisk/>
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Personal Website" placeholder="Enter Personal Website" withAsterisk/>
        <NumberInput hideControls min={0} max={9999999999} clampBehavior="strict" label="Phone Number" placeholder="Enter Phone Number" withAsterisk/>
        </div>
        <FileInput leftSectionPointerEvents="none" placeholder="Your CV" label="Attach Your CV" leftSection={<i className="ri-attachment-2"></i>}/>
        <Textarea placeholder="Try SomeThing Intersting about yourself.....!" label=" Cover Label" autosize minRows={4} />
        <Button color="teal.8" variant="light">Preview</Button>
      </div>
    </div>
  );
};

export default ApplyJobComp;
