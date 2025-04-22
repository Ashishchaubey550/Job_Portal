import { Avatar, Rating } from "@mantine/core";
import testimonials from "../Data/Testnimonial";

const Testnimoinal = () => {
  return (
    <div className=" capitalize mt-16 pb-5">
      <div className=" text-4xl text-center mb-3 font-semibold text-gray-700">
        what <span className="text-yellow-500">User</span> says about us
      </div>
      <div className=" flex justify-evenly">
      {testimonials.map((elem, index) => (
        <div
          key={index}
          className=" flex flex-col gap-3 w-[20%] mt-10 border-2 p-3 rounded-xl border-emerald-600"
        >
          <div className=" flex gap-3 items-center">
            <Avatar
              className=" !h-14 !w-14 "
              src="src/assets/av1.png"
              alt="it's me"
            />
            <div>
              <div className=" text-lg font-semibold text-gray-700">
                {elem.name}
              </div>
              <Rating value={elem.rating} fractions={2} readOnly />
            </div>
          </div>
          <div className="text-sm text-gray-500">
           {elem.description}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Testnimoinal;
