// MainPage.jsx
import React, { useEffect } from 'react';
import CompanyLogo from '../components/CompanyLogo';
import ProfileDropdown from '../components/ProfileDropdown';
import SoundToggle from '../components/SoundToggle'; // Adjust path to your SoundToggle component
import backgroundImage from '../assets/images.jpg'; // Adjust path to your image file

const MainPage = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();

    return () => {
      // Clean up script tag on unmount
      const googleTranslateElement = document.getElementById('google_translate_element');
      googleTranslateElement.parentNode.removeChild(googleTranslateElement);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  };

  const buttonStyle = {
    padding: '2rem', // Increased padding for larger buttons
    fontSize: '2.4rem', // Increased font size for larger buttons
    fontWeight: 'bold',
    borderRadius: '0.5rem',
    margin: '0.5rem',
    cursor: 'pointer',
    minWidth: '200px', // Minimum width for consistent button sizes
  };

  const playButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f0f0f0', // Faint color for Play button
    color: '#333', // Darker text color
  };

  const learnButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e0e0e0', // Faint color for Learn button
    color: '#333', // Darker text color
  };

  const shopButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffcc80', // Different color for Shop button
    color: '#333', // Darker text color
  };

  const soundIconStyle = {
    color: '#fff', // White color for sound icon
  };

  return (
    <div className="main-page" style={backgroundStyle}>
      <header className="header">
        <CompanyLogo />
        <ProfileDropdown />
      </header>
      
      <main className="main-content">
        <div className="buttons-container">
          <button className="play-button" style={playButtonStyle}>Play</button>
          <button className="learn-button" style={learnButtonStyle}>Learn</button>
        </div>
        <div className="shop-button-container">
          <button className="shop-button" style={shopButtonStyle}>Shop</button>
        </div>
      </main>
      
      <SoundToggle style={soundIconStyle} /> {/* Pass style prop to SoundToggle */}
      
      {/* Google Translate dropdown */}
      <div id="google_translate_element" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1000' }}></div>
    </div>
  );
};

export default MainPage;
