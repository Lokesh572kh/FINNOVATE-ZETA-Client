import { useState } from "react";
import questions from './../../data/data.json';

function Quiz(){

  return (
    <div className="flex justify-center items-center h-screen font-poppins bg-secondary">
      <div className="w-full md:w-4/5 bg-white rounded-lg border border-border p-4 sm:p-4 h-4/5 justify-center">
        <div className="flex gap-2">
          {/* {questions.map((item, index) => (
            <button
              className="border rounded-full p-2 w-10 text-center hover:bg-yellow-400"
              key={index}
            >
              {item}
            </button>
          ))} */}
          {console.log(questions.map((item,index) => (console.log())))}
        </div>
        <div className="text-black text-center mb-4 h-2/6 flex items-center justify-center">
          <h2 className="text-2xl font-bold">Question 1</h2>
        </div>
        <div className="flex flex-col items-center p-10 h-3/5">
          <div className="flex w-full justify-center mb-4 p-4 h-3/5">
            <div className="w-1/3 mx-12">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Option 1
              </button>
            </div>
            <div className="w-1/3 mx-12">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Option 2
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center p-4 h-3/5">
            <div className="w-1/3 mx-12">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Option 3
              </button>
            </div>
            <div className="w-1/3 mx-12">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Option 4
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
