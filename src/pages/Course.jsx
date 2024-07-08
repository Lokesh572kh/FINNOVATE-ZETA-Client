import React, { useEffect, useState } from "react";
import ModuleNav from "../components/ModuleNav";
import Learning from "../components/Learning";
import Quiz from "../components/Quiz";
import Bottomnav from "../components/Bottomnav";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import SoundToggle from "../components/SoundToggle";
import { useParams } from "react-router-dom";
import { content } from "../constants";
import axios from "axios";

const Course = () => {

  const params = useParams();

  function findTitleAndIntro(slug) {
    for (let key in content) {
      for (let item of content[key]) {
        if (item.slug === slug) {
          return item;
        }
      }
    }
    return null; // Return null if the slug is not found
  }

  const item = findTitleAndIntro(params.slug);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://amend-hormone-author-mar.trycloudflare.com/generate_mcq`,
          {
            query: item.title+". "+item.intro,
            background_key: "back_1_m",
          }
        );
        
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);
  console.log(data);
  const [currentSection, setCurrentSection] = useState({
    type: "theory",
    index: 0,
  });

  const handleNavigation = (type, index) => {
    setCurrentSection({ type, index });
  };

  const handlePrevious = () => {
    if (currentSection.type === "theory" && currentSection.index > 0) {
      setCurrentSection({ type: "theory", index: currentSection.index - 1 });
    } else if (currentSection.type === "quiz" && currentSection.index === 0) {
      setCurrentSection({ type: "theory", index: data.theory.length - 1 });
    } else if (currentSection.type === "quiz" && currentSection.index > 0) {
      setCurrentSection({ type: "quiz", index: currentSection.index - 1 });
    } else {
      setCurrentSection({ type: "quiz", index: data.quiz.length - 1 });
    }
  };

  const handleNext = () => {
    if (
      currentSection.type === "theory" &&
      currentSection.index < data.theory.length - 1
    ) {
      setCurrentSection({ type: "theory", index: currentSection.index + 1 });
    } else if (
      currentSection.type === "theory" &&
      currentSection.index === data.theory.length - 1
    ) {
      setCurrentSection({ type: "quiz", index: 0 });
    } else if (
      currentSection.type === "quiz" &&
      currentSection.index < data.quiz.length - 1
    ) {
      setCurrentSection({ type: "quiz", index: currentSection.index + 1 });
    } else {
      setCurrentSection({ type: "theory", index: 0 });
    }
  };

  const getTotalItems = () => data?.theory.length + data?.quiz.length;
  const getItemsLeft = () =>
    currentSection.index +
    1 +
    (currentSection.type === "quiz" ? data.theory.length : 0);

  return (
    <div>
      <SoundToggle />
      <ModuleNav
        courseName={item.title}
        itemsLeft={getItemsLeft()}
        totalItems={getTotalItems()}
      />
      <div className="flex justify-center">
        <main className="w-3/4 p-4">
          {currentSection.type === "theory" ? (
            <Learning
              title={data?.theory[currentSection.index].title}
              def={data?.theory[currentSection.index].explanation}
              index={currentSection.index}
            />
          ) : (
            <Quiz
              question={data.quiz[currentSection.index].question}
              index={currentSection.index}
              options={data.quiz[currentSection.index].answers}
              solution={data.quiz[currentSection.index].correctAnswer}
              explanation={data.quiz[currentSection.index].explanation}
            />
          )}
          <div className="flex gap-4 justify-center text-gray-600 items-center mt-6">
            <button
              onClick={handlePrevious}
              className={`${
                currentSection.type === "theory" && currentSection.index === 0
                  ? "cursor-not-allowed"
                  : "hover:text-gray-800"
              } p-2`}
              disabled={
                currentSection.type === "theory" && currentSection.index === 0
              }
            >
              <FaCircleArrowLeft className="text-[46px] " />
            </button>
            <button
              onClick={handleNext}
              className={`${
                currentSection.type === "quiz" &&
                currentSection.index === data?.quiz.length - 1
                  ? "cursor-not-allowed"
                  : "hover:text-gray-800"
              } p-2`}
              disabled={
                currentSection.type === "quiz" &&
                currentSection.index === data?.quiz.length - 1
              }
            >
              <FaCircleArrowRight className="text-[46px] hover:text-gray-800" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Course;
