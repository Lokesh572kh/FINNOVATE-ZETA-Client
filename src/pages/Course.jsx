import React from "react";
import ModuleNav from "../components/ModuleNav";
import Learning from "../components/Learning";
import Quiz from "../components/Quiz";
import Bottomnav from "../components/Bottomnav";

const Course = () => {
  return (
    <div>
      <ModuleNav
        courseName={"Mastering Money Management"}
        itemsLeft={"1"}
        totalItems={"17"}
      />
      {/* <Learning
      title={"Introduction"}
        def={"This is the introduction to the course, it will give you an overview of what you will learn in this course"}
      /> */}
      <Quiz
      //question related to fincance
      question={"What is the best way to save money?"}
      //options for the question,true
      option={["Invest in stock market","Keep money in bank","Spend money on shopping","None of the above"]}
      //correct option
      solution={"Keep money in bank"}
      
      />
      <Bottomnav/>
    </div>
  );
};

export default Course;