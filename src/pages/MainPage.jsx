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

import loadingScreenImage1 from './../../public/loading1.png';

const LoadingScreen = () => (
  <div className="loading-screen">
    <div className="spinner"></div>
    <img src={loadingScreenImage1} alt="Loading Screen 1" className="h-screen w-full" />
  </div>
);

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

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <Hero />
      <Reccomen/>
      <SoundToggle/>
      <Chatbot/>
    </>
  );
};

export default MainPage;

