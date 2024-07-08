import React, { useState, useEffect } from "react";
import Modal from './Modal'; // Import the Modal component

function Quiz({ question, index, options, solution,explanation }) {
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option
  const [isCorrect, setIsCorrect] = useState(null); // null: no answer selected, true: correct, false: incorrect
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const [answered, setAnswered] = useState(false); // Track if the question has been answered

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
    setAnswered(false);
  }, [question]);

  const setAnswer = (option) => {
    if (!answered) { // Only proceed if the question hasn't been answered yet
      setSelectedOption(option);
      setIsCorrect(option === solution);
      setIsModalOpen(true); // Show the modal
      setAnswered(true); // Mark that the question has been answered
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to split options into a 2x2 matrix
  const splitOptions = () => {
    const optionsMatrix = [];
    for (let i = 0; i < options.length; i += 2) {
      optionsMatrix.push(options.slice(i, i + 2));
    }
    return optionsMatrix;
  };

  return (
    <div className="flex justify-center items-center font-poppins">
      <div className="w-full bg-gray-200 mt-10 my-auto rounded-3xl p-4 sm:p-4 h-4/5 justify-center">
        <div className="text-black text-center mt-12 mb-4 h-2/6 flex items-center justify-center">
          <h2 className="text-[30px] px-4 text-gray-700 font-poppins font-semibold">
            {question}
          </h2>
        </div>
        <div className="flex flex-col font-poppins items-center p-10 h-3/5">
          <div className="grid grid-cols-2 gap-4 w-full">
            {splitOptions().map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((option) => (
                  <div key={option.option} className="w-full mx-2">
                    <button
                      onClick={() => setAnswer(option.option)}
                      disabled={answered} // Disable button if the question has been answered
                      className={`p-4 rounded-full text-center h-full flex items-center justify-center w-full text-[18px] font-semibold ${
                        selectedOption === option.option
                          ? isCorrect
                            ? "bg-green-500 hover:bg-green-700"
                            : "bg-red-500 hover:bg-red-700"
                          : "bg-blue-500 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {option.text}
                    </button>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} isCorrect={isCorrect} soln={explanation} />
      </div>
    </div>
  );
}

export default Quiz;
