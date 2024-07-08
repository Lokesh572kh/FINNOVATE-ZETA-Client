import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomCourse = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
    setInputValue("");
  };
  return (
    <div className="my-20 flex flex-col items-center">
      <h2 className="text-[30px] max-w-[900px] text-center font-poppins font-semibold">
        Generate your own course,for customised learning experience{" "}
      </h2>
      <div className="flex my-6 font-poppins justify-center w-full space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter any topics for customised learning"
          className="p-3 w-[400px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link
          to={`/module/${inputValue}`}
          className="p-2 font-bold font-mont px-4 bg-blue-500 text-white rounded hover:bg-blue-600 flex justify-center items-center focus:outline-none  focus:ring-2 focus:ring-blue-500"
        >
          Learn!
        </Link>
      </div>
    </div>
  );
};

export default CustomCourse;
