import { Button, Divider } from "@mantine/core";

const Profile = () => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="src/assets/icons/banner.png"
          alt=""
        />
        <img
          className="rounded-full w-48 h-48 bottom-1/5 absolute left-3 border-gray-800 border-8"
          src="src/assets/av1.png"
          alt=""
        />
        <div className="px-3 mt-16 ">
          <div className="text-3xl font-semibold flex justify-between">
            Ashish Chaubey{" "}
            <Button color="yellow.8" variant="light">
              Back
            </Button>
          </div>
          <div className="text-xl flex gap-1 items-center"><i className="ri-briefcase-4-line"></i>Software Engineer &bull; Google</div>
          <div className=" flex gap-1 text-xl font-semibold items-center text-gray-500">
            <i className="ri-map-pin-line text-sky-300 text-xl h-7 w-5" /> New
            Delhi , India
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className=" text-sm text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione quas id exercitationem facilis, repellendus dolor rerum praesentium deleniti eveniet ea placeat provident commodi ex obcaecati optio, unde assumenda nostrum ipsam ut aut. Voluptatum, accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquid ipsa explicabo veritatis earum asperiores consectetur iusto maxime quae. Corporis ipsa vero, recusandae libero corrupti iste illum, aut, et beatae dignissimos velit temporibus ducimus? Dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, perferendis ullam doloribus sit molestiae at maiores facere quidem itaque magnam ex debitis enim ipsa animi nisi, corporis magni eligendi. Consectetur quae magnam quis dolores consequuntur.
        </div>
      </div>
      <Divider my="xl" />

      <div className="">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
           <div className="bg-yellow-300 bg-opacity-15 rounded-full text-yellow-900 cursor-pointer px-4 py-2 text-sm font-semibold">React</div>
           <div className="bg-yellow-300 bg-opacity-15 rounded-full text-yellow-900 cursor-pointer px-4 py-2 text-sm font-semibold">React</div>
           <div className="bg-yellow-300 bg-opacity-15 rounded-full text-yellow-900 cursor-pointer px-4 py-2 text-sm font-semibold">React</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
