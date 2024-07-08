import React from 'react';
import backgroundImage from '../assets/images.jpg'; // Adjust path to your image file

const SelectSimulationLevel = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  const buttonStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '20px 40px',
    margin: '0 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#000', // Black text color
  };

  const easyButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50', // Less bright green
  };

  const mediumButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#FFEB3B', // Less bright yellow
  };

  const hardButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#F44336', // Less bright red
  };

  return (
    <div style={containerStyle}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Select Simulation Level</h1>
        <div>
          <button style={easyButtonStyle}>Easy</button>
          <button style={mediumButtonStyle}>Medium</button>
          <button style={hardButtonStyle}>Hard</button>
        </div>
      </div>
    </div>
  );
};

export default SelectSimulationLevel;
