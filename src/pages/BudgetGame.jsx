import React, { useState } from 'react';
import backgroundImage from '../assets/images.jpg'; // Adjust the path to your background image

const BudgetGame = () => {
  const [income, setIncome] = useState(3000); // Example monthly income
  const [expenses, setExpenses] = useState({
    rent: 0,
    groceries: 0,
    utilities: 0,
    entertainment: 0,
    savings: 0,
  });
  const [remainingBudget, setRemainingBudget] = useState(income);

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    const newExpenses = { ...expenses, [name]: Number(value) };
    setExpenses(newExpenses);
    const totalExpenses = Object.values(newExpenses).reduce((acc, curr) => acc + curr, 0);
    setRemainingBudget(income - totalExpenses);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="absolute top-4 left-0 right-0 text-center">
        <h1 className="text-4xl font-bold text-black">Budget Management Challenge</h1>
      </header>
      <main className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center mt-16">
        <h2 className="text-2xl mb-4">Manage Your Monthly Budget</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2">Monthly Income: ₹{income}</label>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.keys(expenses).map((expense) => (
            <div key={expense}>
              <label className="block text-lg mb-2 capitalize">{expense}</label>
              <input
                type="number"
                name={expense}
                value={expenses[expense]}
                onChange={handleExpenseChange}
                className="p-2 rounded-lg border border-gray-300"
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Remaining Budget: ₹{remainingBudget}</label>
        </div>
      </main>
    </div>
  );
};

export default BudgetGame;
