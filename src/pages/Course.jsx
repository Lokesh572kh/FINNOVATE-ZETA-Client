import React from "react";
import ModuleNav from "../components/ModuleNav";
import Learning from "../components/Learning";

const Course = () => {
  return (
    <div>
      <ModuleNav
        courseName={"Mastering Money Management"}
        itemsLeft={"15"}
        totalItems={"17"}
      />
      <Learning
      title={"Introduction"}
        def={"This is the introduction to the course, it will give you an overview of what you will learn in this course"}
      />
    </div>
  );
};

export default Course;