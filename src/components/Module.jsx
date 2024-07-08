import React, { useState } from 'react';
import Learning from './Learning';
import Quiz from './Quiz';
import Modal from './Modal';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';

const App = () => {
  // Simulated API response
  const data = {
    theory: [
      {
        title: "Compound Interest",
        explanation: "Compound interest is the interest calculated on both the principal amount and any accrued interest over time. It results in exponential growth of the initial investment or debt."
      },
      {
        title: "Interest Rates: Banks vs. Money Lenders",
        explanation: "The interest rates charged by money lenders are often higher than those of banks due to the difference in compounding frequency. Money lenders typically state interest rates on a monthly basis, which can lead to higher annual interest rates compared to banks that state rates on a yearly basis."
      },
      {
        title: "Types of Deposit Accounts",
        explanation: "Banks offer three types of deposit accounts: Savings Deposit, Term Deposit, and Recurring Deposit. Each type serves a specific purpose, with varying features and benefits."
      },
      {
        title: "Opening a Savings Bank Account",
        explanation: "To open a savings bank account, one needs to fill out an account opening form, provide a latest photograph, and submit documents to comply with KYC norms, including proof of identity and residence."
      }
    ],
    quiz: [
      {
        question: "What is compound interest?",
        answers: [
          { option: "A", text: "Interest calculated only on the principal amount." },
          { option: "B", text: "Interest calculated on both principal and accrued interest." },
          { option: "C", text: "Interest calculated only on the interest." },
          { option: "D", text: "Interest calculated on the number of transactions." }
        ],
        correctAnswer: "B",
        explanation: "Compound interest is the interest calculated on both the principal amount and any accrued interest over time, resulting in exponential growth."
      },
      {
        question: "Why do money lenders charge higher interest rates compared to banks?",
        answers: [
          { option: "A", text: "Because they offer more services." },
          { option: "B", text: "Because they have higher operational costs." },
          { option: "C", text: "Because they compound interest monthly." },
          { option: "D", text: "Because they are more reliable." }
        ],
        correctAnswer: "C",
        explanation: "Money lenders often charge higher interest rates because they compound interest on a monthly basis, leading to higher annual interest rates compared to banks that compound interest annually."
      },
      {
        question: "What are the three types of deposit accounts offered by banks?",
        answers: [
          { option: "A", text: "Savings, Credit, and Loan accounts." },
          { option: "B", text: "Savings, Term, and Recurring deposit accounts." },
          { option: "C", text: "Current, Fixed, and Recurring deposit accounts." },
          { option: "D", text: "Savings, Investment, and Insurance accounts." }
        ],
        correctAnswer: "B",
        explanation: "Banks offer three types of deposit accounts: Savings Deposit, Term Deposit, and Recurring Deposit, each with its unique features and benefits."
      },
      {
        question: "What is required to open a savings bank account?",
        answers: [
          { option: "A", text: "Only a photograph." },
          { option: "B", text: "Only proof of identity and residence." },
          { option: "C", text: "A photograph and documents to comply with KYC norms." },
          { option: "D", text: "A minimum deposit amount." }
        ],
        correctAnswer: "C",
        explanation: "To open a savings bank account, one needs to fill out an account opening form, provide a latest photograph, and submit documents to comply with KYC norms, including proof of identity and residence."
      }
    ]
  };

  const [currentSection, setCurrentSection] = useState({ type: 'theory', index: 0 });

  const handleNavigation = (type, index) => {
    setCurrentSection({ type, index });
  };

  const handlePrevious = () => {
    if (currentSection.type === 'theory' && currentSection.index > 0) {
      setCurrentSection({ type: 'theory', index: currentSection.index - 1 });
    } else if (currentSection.type === 'quiz' && currentSection.index === 0) {
      setCurrentSection({ type: 'theory', index: data.theory.length - 1 });
    } else if (currentSection.type === 'quiz' && currentSection.index > 0) {
      setCurrentSection({ type: 'quiz', index: currentSection.index - 1 });
    } else {
      setCurrentSection({ type: 'quiz', index: data.quiz.length - 1 });
    }
  };

  const handleNext = () => {
    if (currentSection.type === 'theory' && currentSection.index < data.theory.length - 1) {
      setCurrentSection({ type: 'theory', index: currentSection.index + 1 });
    } else if (currentSection.type === 'theory' && currentSection.index === data.theory.length - 1) {
      setCurrentSection({ type: 'quiz', index: 0 });
    } else if (currentSection.type === 'quiz' && currentSection.index < data.quiz.length - 1) {
      setCurrentSection({ type: 'quiz', index: currentSection.index + 1 });
    } else {
      setCurrentSection({ type: 'theory', index: 0 });
    }
  };

  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-100 p-4">
        <nav>
          <h2 className="font-bold mb-2">Theory</h2>
          <ul>
            {data.theory.map((item, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleNavigation('theory', index)}
                  className={`block w-full text-left ${currentSection.type === 'theory' && currentSection.index === index ? 'font-bold' : ''}`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="font-bold mt-4 mb-2">Quiz</h2>
          <ul>
            {data.quiz.map((item, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleNavigation('quiz', index)}
                  className={`block w-full text-left ${currentSection.type === 'quiz' && currentSection.index === index ? 'font-bold' : ''}`}
                >
                  {`Quiz ${index + 1}`}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4">
        {currentSection.type === 'theory' ? (
          <Learning
            title={data.theory[currentSection.index].title}
            def={data.theory[currentSection.index].explanation}
            index={currentSection.index}
          />
        ) : (
          <Quiz
            question={data.quiz[currentSection.index].question}
            index={currentSection.index}
            option={data.quiz[currentSection.index].answers.map(answer => answer.text)}
            solution={data.quiz[currentSection.index].correctAnswer}
          />
        )}
        <div className='flex gap-4 justify-center text-gray-600 items-center mt-12'>
          <button onClick={handlePrevious} className='p-2'>
            <FaCircleArrowLeft className='text-[46px] hover:text-gray-800' />
          </button>
          <button onClick={handleNext} className='p-2'>
            <FaCircleArrowRight className='text-[46px] hover:text-gray-800' />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
