import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images.jpg'; // Adjust path to your image file

const investments = [
  { id: 1, name: 'Stocks', type: 'stocks', value: 0 },
  { id: 2, name: 'Bonds', type: 'bonds', value: 0 },
  { id: 3, name: 'Mutual Funds', type: 'mutual_funds', value: 0 },
  { id: 4, name: 'Cryptocurrency', type: 'crypto', value: 0 },
];

const initialNews = [
  { id: 1, text: 'Stocks are expected to rise due to positive economic data.' },
  { id: 2, text: 'Bonds are stable with moderate returns expected.' },
  { id: 3, text: 'Mutual funds show potential for steady growth.' },
  { id: 4, text: 'Cryptocurrency is highly volatile with potential for high gains or losses.' },
];

const BudgetManagement = () => {
  const [portfolio, setPortfolio] = useState(investments);
  const [cash, setCash] = useState(10000);
  const [news, setNews] = useState(initialNews);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState(120);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/summary', { state: { portfolio, cash } });
    }
  }, [timeLeft, navigate, portfolio, cash]);

  const handleSelectInvestment = (investment) => {
    setSelectedInvestment(investment);
  };

  const handleInvestmentChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  const handleInvest = () => {
    if (!selectedInvestment || investmentAmount <= 0 || investmentAmount > cash) {
      return;
    }

    const newPortfolio = portfolio.map((item) => {
      if (item.type === selectedInvestment.type) {
        return { ...item, value: item.value + Number(investmentAmount) };
      }
      return item;
    });

    setPortfolio(newPortfolio);
    setCash(cash - investmentAmount);
    setInvestmentAmount('');
  };

  const navigateToSummary = () => {
    navigate('/summarypage', { state: { portfolio, cash } });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="absolute top-4 left-4 flex items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h1 className="ml-4 text-2xl font-bold text-white">Investment Portfolio Simulator</h1>
      </header>
      <div className="absolute top-10 right-4 text-white text-lg">
        Cash: ₹{cash.toFixed(2)}
      </div>
      <div className="absolute top-4 right-40 text-white text-lg flex items-center">
        <span className="mr-2">Time Left:</span>
        <div className="bg-gray-800 px-2 py-1 rounded-lg">{timeLeft}s</div>
      </div>
      <main className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center mt-16 max-w-md w-full">
        <h2 className="text-2xl mb-4">Choose Your Investment</h2>
        <div className="mb-4">
          {portfolio.map((investment) => (
            <button
              key={investment.id}
              onClick={() => handleSelectInvestment(investment)}
              className={`p-4 rounded-lg m-2 ${
                selectedInvestment && selectedInvestment.id === investment.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-200 text-black'
              }`}
            >
              {investment.name}
            </button>
          ))}
        </div>
        {selectedInvestment && (
          <div className="mb-4">
            <label className="block text-lg mb-2">Invest in {selectedInvestment.name}</label>
            <input
              type="number"
              value={investmentAmount}
              onChange={handleInvestmentChange}
              className="p-2 rounded-lg border border-gray-300 mb-2"
            />
            <button
              onClick={handleInvest}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Invest
            </button>
          </div>
        )}
        <div className="mt-4 text-left">
          <h3 className="text-xl mb-2">Market News:</h3>
          <ul>
            {news.map((newsItem) => (
              <li key={newsItem.id}>{newsItem.text}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={navigateToSummary}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
        >
          View Summary
        </button>
      </main>
    </div>
  );
};

export default BudgetManagement;
