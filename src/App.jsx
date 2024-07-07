<<<<<<< HEAD
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
=======
import React from 'react'
import { Header } from './components/Header'
>>>>>>> 8f09b17edd69d4a1aa3c46e50139e1b98c9158e1

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
=======
    <>
    <Header/>
    <div>App</div>
    </>
  )
>>>>>>> 8f09b17edd69d4a1aa3c46e50139e1b98c9158e1
}

export default App;
