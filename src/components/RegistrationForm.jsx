import React, { useState, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", 
  "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    gender: '',
    state: '',
    caste: ''
  });
  const [speakerOn, setSpeakerOn] = useState(true);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.onload = () => {
          window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
              { pageLanguage: 'en' },
              'google_translate_element'
            );
          };
        };
        document.body.appendChild(script);
      }
    };

    addGoogleTranslateScript();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted: ', formData);
  };

  const toggleSpeaker = () => {
    setSpeakerOn(!speakerOn);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-full max-w-2xl">
        <div id="google_translate_element" className="mb-4"></div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-blue-600">Registration Form</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile No</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="">Select</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Caste</label>
          <input
            type="text"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4"
        >
          Submit
        </button>
        <div className="flex justify-center items-center mt-4">
          <button type="button" onClick={toggleSpeaker} className="text-2xl">
            {speakerOn ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
