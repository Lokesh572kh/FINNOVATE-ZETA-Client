import React, { useState } from "react";
import Modal from './Modal'; // Import the Modal component

function Quiz({ question, index, option, solution }) {
  const [ans, setans] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // null: no answer selected, true: correct, false: incorrect
  const [answerClicked, setAnswerClicked] = useState(false); // Track if an answer has been clicked
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  const setanswer = (selectedOption) => {
    if (!answerClicked) { // Only proceed if an answer hasn't been clicked yet
      setans(selectedOption);
      setIsCorrect(selectedOption === solution);
      setAnswerClicked(true); // Mark that an answer has been clicked
      setIsModalOpen(true); // Show the modal
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center font-poppin">
      <div className="w-full bg-gray-200 mt-12 my-auto md:w-4/5  rounded-3xl p-4 sm:p-4 h-4/5 justify-center">
        <div className="text-black text-center mt-12 mb-4 h-2/6 flex items-center justify-center">
          <h2 className="text-[36px] text-gray-700 font-poppins font-semibold">
            {question}
          </h2>
        </div>
        <div className="flex flex-col font-poppins items-center p-10 h-3/5">
          <div className="flex w-full justify-center mb-4">
            {option.slice(0, 2).map((option, idx) => (
              <div key={idx} className="w-1/3 mx-2">
                <button
                  onClick={() => setanswer(option)}
                  disabled={answerClicked} // Disable button if an answer has been clicked
                  className={`p-4 rounded-full text-center h-full flex items-center justify-center w-full text-[18px] font-semibold ${
                    ans === option
                      ? isCorrect
                        ? "bg-green-500 hover:bg-green-700"
                        : "bg-red-500 hover:bg-red-700"
                      : option === solution && isCorrect === false
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  }`}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center mb-4">
            {option.slice(2).map((option, idx) => (
              <div key={idx} className="w-1/3 mx-2">
                <button
                  onClick={() => setanswer(option)}
                  disabled={answerClicked} // Disable button if an answer has been clicked
                  className={`p-4 rounded-full text-center h-full flex items-center justify-center w-full text-[18px] font-semibold ${
                    ans === option
                      ? isCorrect
                        ? "bg-green-500 hover:bg-green-700"
                        : "bg-red-500 hover:bg-red-700"
                      : option === solution && isCorrect === false
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  }`}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} isCorrect={isCorrect} />
      </div>
    </div>
  );
}

export default Quiz;
