import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images.jpg'; // Adjust path to your image file

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { portfolio, cash } = location.state || {};

  const totalValue = portfolio
    ? portfolio.reduce((acc, investment) => acc + investment.value, 0) + cash
    : 0;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="absolute top-4 left-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </header>
      <main className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center mt-16 max-w-md w-full">
        <h2 className="text-2xl mb-4">Investment Summary</h2>
        <div className="mb-4">
          <p className="text-lg">Total Portfolio Value: ₹{totalValue.toFixed(2)}</p>
        </div>
        <div className="text-left">
          <h3 className="text-xl mb-2">Investments:</h3>
          <ul>
            {portfolio &&
              portfolio.map((investment) => (
                <li key={investment.id}>
                  {investment.name}: ₹{investment.value.toFixed(2)}
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl mb-2">Remaining Cash: ₹{cash.toFixed(2)}</h3>
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;
