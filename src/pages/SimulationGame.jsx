import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaArrowLeft } from 'react-icons/fa'; // Import react-icons for the back arrow and clock icons
import backgroundImage from '../assets/images.jpg'; // Adjust the path to your image file

const QuizGame = () => {
  const navigate = useNavigate();
  const [tokens, setTokens] = useState(100);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dialogText, setDialogText] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // Timer set to 2 minutes (120 seconds)

  const options = [
    { id: 1, label: 'Savings', value: 20, text: 'Invest in Savings' },
    { id: 2, label: 'Fixed Deposit', value: 30, text: 'Invest in Fixed Deposit' },
    { id: 3, label: 'Stock Market', value: 50, text: 'Invest in Stock Market' },
    { id: 4, label: 'CryptoCurrency', value: 100, text: 'Invest in CryptoCurrency' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option.id)) {
      setSelectedOptions(selectedOptions.filter(id => id !== option.id));
      setTokens(tokens + option.value);
    } else {
      if (tokens >= option.value) {
        setSelectedOptions([...selectedOptions, option.id]);
        setTokens(tokens - option.value);
      }
    }
  };

  const handleSubmit = () => {
    const uniqueTexts = new Set(selectedOptions.map((id) => options.find((opt) => opt.id === id).text));
    setDialogText([...uniqueTexts].join('. '));
  };

  const handleReset = () => {
    setSelectedOptions([]);
    setTokens(100);
    setDialogText('');
    setTimeLeft(120); // Reset timer to 2 minutes
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="absolute top-4 left-4">
        <button
          onClick={handleBack}
          className="flex items-center bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 hover:bg-gray-400"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </header>
      <header className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="flex items-center bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg">
          <span className="mr-2">₹</span>
          <span>{tokens}</span>
        </div>
        <div className="flex items-center bg-red-300 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg">
          <FaClock className="mr-2" />
          <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </header>
      <main className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center mt-16">
        <h2 className="text-2xl mb-4">Where will you invest your ₹100?</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={`p-4 text-xl font-bold rounded-lg transition duration-300 ${
                selectedOptions.includes(option.id)
                  ? 'bg-blue-700 text-white'
                  : tokens >= option.value
                    ? 'bg-blue-500 hover:bg-blue-700 text-white'
                    : 'bg-gray-500 text-white cursor-not-allowed'
              }`}
            >
              {option.label} - ₹{option.value}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Submit
        </button>
      </main>
      {dialogText && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl mb-4">{dialogText}</p>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
