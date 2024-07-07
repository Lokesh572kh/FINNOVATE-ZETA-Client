// WelcomePage.jsx
import React from 'react';
import backgroundImage from '../assets/images.jpg'; // Adjust path to your image file
import SoundToggle from '../components/SoundToggle'; // Import the SoundToggle component

const WelcomePage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh', // Ensure full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333', // Default text color
    textAlign: 'center', // Center align text
    position: 'relative', // Position relative for absolute positioning of sound icon
  };

  const headingStyle = {
    fontSize: '2.5rem', // Larger font size for heading
    fontWeight: 'bold', // Bold text
    marginBottom: '1rem', // Spacing
  };

  const largerTextStyle = {
    fontSize: '3rem', // Larger font size
    fontWeight: 'bold', // Bold text
    marginBottom: '2rem', // Spacing
  };

  const buttonStyle = {
    width: '200px', // Adjust width as needed
    padding: '1rem', // Padding for button
    fontSize: '1.5rem', // Font size for button text
    fontWeight: 'bold', // Bold text
    borderRadius: '0.5rem', // Rounded corners
    margin: '1rem', // Margin around buttons
    cursor: 'pointer', // Cursor style
    backgroundColor: '#4caf50', // Normal green color for buttons
    color: '#fff', // White text color
    transition: 'background-color 0.3s ease', // Smooth transition for background color
    border: 'none', // Remove default button border
    outline: 'none', // Remove default outline
  };

  const buttonHoverStyle = {
    backgroundColor: '#388e3c', // Darker green color on hover
  };

  return (
    <div className="welcome-page" style={backgroundStyle}>
      <div>
        <h1 style={headingStyle}>WELCOME TO XYZ</h1>
        <p style={largerTextStyle}>CAN YOU READ OR WRITE?</p>
        <div>
          <button
            className="yes-button"
            style={buttonStyle}
          >
            YES
          </button>
          <button
            className="no-button"
            style={{ ...buttonStyle, backgroundColor: '#81c784' }}
          >
            NO
          </button>
        </div>
      </div>

      {/* SoundToggle component positioned at the bottom right */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: '1000' }}>
        <SoundToggle />
      </div>
    </div>
  );
};

export default WelcomePage;
