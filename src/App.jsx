// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';
import Course from './pages/Course';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/Course" element={<Course />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
