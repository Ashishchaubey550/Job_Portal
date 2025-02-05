import { Avatar, TextInput } from "@mantine/core";

const DreamJob = () => {
  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="w-[45%] px-48 flex items-center flex-col">
        <p className=" text-left text-6xl font-bold text-gray-700 [&>span]:text-green-300">
          Find Your <span>Dream</span> <span>Job </span>With Us
        </p>
        <h1 className=" text-lg text-gray-800 text-left">
          Good life begins with a good company.start explore thousthands of job
          in one place
        </h1>
        <div className="flex gap-3 mt-5">
          <TextInput
            className=" [&_input]:!text-green-300 bg-gray-700 text-white rounded-lg p-1 px-2"
            variant="unstyled"
            placeholder="Java Developer"
            label="Job Title"
          />
          <TextInput
            className="  [&_input]:!text-green-300 bg-gray-700 text-white rounded-lg p-1 px-2"
            variant="unstyled"
            placeholder="Full time"
            label="Job Title"
          />
          <div className="  flex justify-center items-center bg-teal-300 px-2 rounded-lg hover:bg-teal-400">
            <i className="ri-search-2-line text-4xl text-gray-600 cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div className=" w-[30rem] flex justify-center items-center">
        <div className=" w-[30rem] relative">
          <img src="/src/assets/Dreamjob.png" className=" rounded-full" alt="" />
          <div className=" top-[65%] -right-14 absolute w-fit border-teal-400 border rounded-lg p-2 backdrop-blur-sm">
          <div className=" text-center mb-1 text-2xl font-extrabold text-green-600">10k+ got job</div>
            <Avatar.Group spacing="sm">
              <Avatar src="/src/assets/Dreamjob.png" radius="xl" />
              <Avatar src="/src/assets/av1.png" radius="xl" />
              <Avatar src="/src/assets/av2.avif" radius="xl" />
              <Avatar src="/src/assets/av3.avif" radius="xl" />
              <Avatar radius="xl">+5k</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
