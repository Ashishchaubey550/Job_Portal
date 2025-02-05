import { Avatar, Indicator } from "@mantine/core";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" bg-neutral-100">
      <div className=" max-w-screen-xl mx-auto bg-gray-300 h-18 flex justify-between px-10 items-center">
        <div className="flex gap-3 items-center">
          <i className="ri-vuejs-fill text-3xl"></i>
          <span className=" text-xl font-semibold">FindJob</span>
        </div>
        <Navbar/>
        <div className=" flex items-center gap-3">
          <div className=" flex items-center gap-3">
            <span className=" font-semibold">Ashish</span>
            <Avatar radius="lg" size="lg" />
          </div>
          <div className=" bg-gray-100 rounded-full px-2 py-1">
            <i className="ri-user-settings-fill text-xl"></i>
          </div>
          <div className=" bg-gray-100 rounded-full px-2 py-1">
            <Indicator inline label="New" color="yellow" size={16} withBorder processing offset={-5}>
              <i className="ri-notification-4-fill text-xl"></i>
            </Indicator>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
