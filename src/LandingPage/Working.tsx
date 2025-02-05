import work from "../Data/WorkData";

const Working = () => {
  return (
    <div className="mt-16 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-gray-700">
        How it <span className="text-yellow-500">Work</span>
      </div>
      <div className="text-lg mb-10 text-gray-500 text-center w-1/4 mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>
      <div className=" flex p-16 justify-evenly items-center">
        <div>
          <img
            className="w-[30rem] rounded-4xl"
            src="/src/assets/workinggirl.png"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-11">
          {work.map((work, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className=" p-3 bg-yellow-500 rounded-full">
                <img
                  className=" w-[4rem]"
                  src="/src/assets/buildres.png"
                  alt={work.name}
                />
              </div>
              <div>
                <div className=" text-gray-700 text-xl font-semibold">
                  {work.name}
                </div>
                <div className=" text-gray-500">
                 {work.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
