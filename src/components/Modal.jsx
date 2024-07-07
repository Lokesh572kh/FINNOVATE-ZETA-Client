import React, { useEffect } from 'react';
import { GrStatusGood } from "react-icons/gr";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";
const Modal = ({ isOpen, onClose, isCorrect }) => {
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, 2000); // Close modal after 2000ms (2 seconds)
    }

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white opacity-90 p-8 flex flex-col items-center rounded-lg shadow-lg w-1/3 text-center">
        {
            isCorrect ? <GrStatusGood className="text-green-500 text-6xl text-center" /> : <BsEmojiSmileUpsideDownFill className='text-blue-500 text-6xl text-center' />
        }
        <h2 className="text-2xl font-bold mt-2 mb-4">
          {isCorrect ? "Congratulations!" : "Better luck next time!"}
        </h2>
        <p className="text-lg">
          {isCorrect ? "You got it right!" : "Work harder next time!"}
        </p>
      </div>
      {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
    </div>
  );
};

export default Modal;
