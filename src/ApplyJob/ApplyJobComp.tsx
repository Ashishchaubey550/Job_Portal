import {
  Button,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Notification } from '@mantine/core';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit , setSubmit] = useState(false);
  const [sec,setSec] = useState(5);
  const Navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({top:0, behavior:"smooth"})
  };

  const handleSubmit=()=>{
    setSubmit(!submit);
    let x=5;
    setInterval(() => {
      x--;
      setSec(x);
      if(x==0)Navigate('/findjobs');
      
    }, 1000);

  }

  return (
    <>
    <div className=" w-2/4 mx-auto mt-2 flex-col gap-1">
    <LoadingOverlay className="!fixed" visible={submit} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />

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
        <div className="flex  gap-2 items-center">
          <Link to="/apply_job">
            <Button color="teal.5" variant="light" size="ms">
              Apply
            </Button>
          </Link>
          <i className="ri-bookmark-line cursor-pointer text-yellow-700 text-xl"></i>
        </div>
      </div>
      <div className="text-xl font-semibold mt-5 mb-3">
        Submit Your Application
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            label="Full Name"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-gray-500 font-semibold" : ""}`}
            placeholder="Enter Name"
            withAsterisk
          />
          <TextInput
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-gray-500 font-semibold" : ""}`}
            label="Email"
            placeholder="Enter Email"
            withAsterisk
          />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-gray-500 font-semibold" : ""}`}
            label="Personal Website"
            placeholder="Enter Personal Website"
            withAsterisk
          />
          <NumberInput
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-gray-500 font-semibold" : ""}`}
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
            label="Phone Number"
            placeholder="Enter Phone Number"
            withAsterisk
          />
        </div>
        <FileInput
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={`${preview ? "text-gray-500 font-semibold" : ""}`}
          leftSectionPointerEvents="none"
          placeholder="Your CV"
          label="Attach Your CV"
          leftSection={<i className="ri-attachment-2"></i>}
        />
        <Textarea
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={`${preview ? "text-gray-500 font-semibold" : ""}`}
          placeholder="Try SomeThing Intersting about yourself.....!"
          label=" Cover Label"
          autosize
          minRows={4}
        />
        {!preview && (
          <Button onClick={handlePreview} color="teal.8" variant="light">
            Preview
          </Button>
        )}
        {preview && (
          <div className="flex gap-10 [&>*]:w-1/2">
            <Button fullWidth onClick={handlePreview} color="teal.8" variant="light">
              Edit
            </Button>
            <Button onClick={handleSubmit} fullWidth color="teal.8" variant="light">
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>

    <Notification className={` z-[10001] !border-yellow-500 -translate-y-25 !fixed top-0 left-[40%] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-25"}`} withBorder icon={<i className="ri-check-double-line"></i>} color="teal" title="Application Submited" mt="md" withCloseButton={false}>
        Redirecting to Find Jobs in {sec} seconds...... 
      </Notification>
    </>
  );
};

export default ApplyJobComp;
