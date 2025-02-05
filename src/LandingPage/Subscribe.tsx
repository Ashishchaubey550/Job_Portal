import { Button, TextInput } from "@mantine/core";
import React from "react";

const Subscribe = () => {
  return (
    <div className=" capitalize  mt-20 flex items-center bg-violet-300 mx-20 py-3 rounded-xl justify-center">
      <div className="text-5xl w-2/5 text-center font-semibold text-gray-700">
        Never wants to miss <span className="text-lime-300">job news?</span>
      </div>
      <div className=" rounded-xl bg-gray-600 flex gap-4 px-3 py-5 pl-6 items-center">
        <TextInput
          className="[&_input]:text-green-500 font-semibold"
          variant="unstyled"
          size="xl"
          placeholder="Your@email.com"
        />
        <Button
          className="!rounded-xl"
          size="lg"
          color="teal.5"
          variant="filled"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
