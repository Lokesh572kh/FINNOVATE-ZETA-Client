import React from "react";
import { Button } from "./Button";

const ModuleNav = ({ courseName, itemsLeft, totalItems }) => {
  return (
    <div className="border font-poppins flex flex-col items-center border-gray-300 pt-3 rounded-lg">
      <div className="flex items-center justify-between w-full px-10">
        <Button href="#" className="hidden lg:block h-fit bg-primary hover:bg-primaryDark">
          Details
        </Button>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold my-3 capitalize">{courseName}</h1>
          <div className="text-gray-600 text-lg">
            Module Completed: {itemsLeft}/{totalItems}
          </div>
        </div>
        <Button href="/" className="hidden lg:block h-fit">
          Go Back
        </Button>
      </div>

      <div className="w-full mt-2 bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-500 ease-out" // Added transition class
          style={{ width: `${(itemsLeft / totalItems) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ModuleNav;
