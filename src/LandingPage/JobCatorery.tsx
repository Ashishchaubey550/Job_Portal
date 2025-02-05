import { Carousel } from "@mantine/carousel";
import jobCategory from "../Data/jobCategory";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';


const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-gray-700">
        Browse <span className="text-yellow-500">Job</span> Category
      </div>
      <div className="text-lg mb-10 text-gray-500 text-center w-1/4 mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      {/* Carousel Container */}
      <div className="mt-5">
        <Carousel
          slideGap="xs"
          slideSize="22%"  
          loop
          
          dragFree
          controlsOffset="xl"
          className=" select-none"
          nextControlIcon={<IconArrowRight  className=" h-8 w-8"  />}
          previousControlIcon={<IconArrowLeft className=" h-8 w-8"  />}
      
        >
          {jobCategory.map((category, index) => (
            <Carousel.Slide key={index}>
              <div className="flex flex-col items-center w-72 border border-green-600 p-4 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-teal-500">
                <div className=" bg-teal-400 p-2 rounded-full">
                  <img className="h-16 w-16" src={category.img} alt="" />
                </div>
                <div className=" text-gray-500 font-semibold text-xl">{category.name}</div>
                <div className="text-sm  text-gray-500 text-center">{category.description}</div>
                <div className=" text-lg text-yellow-500">
                  {category.jobsAvailable} jobs available
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default JobCategory;
