// src/App.jsx
import React from 'react';
import 'babel-polyfill';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';
import Course from './pages/Course';
import NameRecorder from './pages/NameRecorder';
import GenderAge from './pages/GenderAge';
import BudgetManagement from './pages/BudgetManagement';
import SimulationGame from './pages/SimulationGame';
import SummaryPage from './pages/SummaryPage';
import Entry from './components/Learn/Entry';
import Children_Module_1 from './components/Learn/Children/Children_Module_1';
import Children_Module_2 from './components/Learn/Children/Children_Module_2';
import Children_Module_3 from './components/Learn/Children/Children_Module_3';
import Children_Module_4 from './components/Learn/Children/Children_Module_4';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/BudgetManagement" element={<BudgetManagement />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/SummaryPage" element={<SummaryPage />} />
          <Route path="/SimulationGame" element={<SimulationGame />} />
          <Route path="/GenderAge" element={<GenderAge />} />
          <Route path="/NameRecorder" element={<NameRecorder />} />
          <Route path="/Entry" element={<Entry />} />
          <Route path="/Children_Module_1" element={<Children_Module_1 />} />
          <Route path="/Children_Module_2" element={<Children_Module_2 />} />
          <Route path="/Children_Module_3" element={<Children_Module_3 />} />
          <Route path="/Children_Module_4" element={<Children_Module_4 />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;