// MainPage.jsx
import React, { useEffect, useState } from "react";
import CompanyLogo from "../components/CompanyLogo";
import ProfileDropdown from "../components/ProfileDropdown";
import SoundToggle from "../components/SoundToggle"; // Adjust path to your SoundToggle component
import backgroundImage from "../assets/images.jpg"; // Adjust path to your image file
import {Header} from "../components/Header";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reccomen from "./Reccomend";
import Chatbot from "../components/Chatbot";
import LoadingScreen from "./Loading";
import CustomCourse from "../components/CustomCourse";

const MainPage = () => {
  // useEffect(() => {
  //   const addGoogleTranslateScript = () => {
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src =
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   };

  //   // window.googleTranslateElementInit = () => {
  //   //   new window.google.translate.TranslateElement(
  //   //     { pageLanguage: "en" },
  //   //     "google_translate_element"
  //   //   );
  //   // };

  //   // addGoogleTranslateScript();

  //   return () => {
  //     // Clean up script tag on unmount
  //     const googleTranslateElement = document.getElementById(
  //       "google_translate_element"
  //     );
  //     googleTranslateElement.parentNode.removeChild(googleTranslateElement);
  //   };
  // }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  const buttonStyle = {
    padding: "2rem", // Increased padding for larger buttons
    fontSize: "2.4rem", // Increased font size for larger buttons
    fontWeight: "bold",
    borderRadius: "0.5rem",
    margin: "0.5rem",
    cursor: "pointer",
    minWidth: "200px", // Minimum width for consistent button sizes
  };

  const playButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f0f0f0", // Faint color for Play button
    color: "#333", // Darker text color
  };

  const learnButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e0e0e0", // Faint color for Learn button
    color: "#333", // Darker text color
  };

  const shopButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ffcc80", // Different color for Shop button
    color: "#333", // Darker text color
  };

  const soundIconStyle = {
    color: "#fff", // White color for sound icon
  };

  const [isLoading, setIsLoading] = useState(true);
  const [mainPageOpacity, setMainPageOpacity] = useState(0);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Start fading in the main page content
    setTimeout(() => setMainPageOpacity(1), 20);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div 
      style={{
        opacity: mainPageOpacity,
        transition: 'opacity 1s ease-in-out'
      }}
    >
      <Header />
      <Hero />
      <Reccomen/>
      <SoundToggle/>
      <CustomCourse/>
      <Chatbot/>
    </div>
  );
};

export default MainPage;

