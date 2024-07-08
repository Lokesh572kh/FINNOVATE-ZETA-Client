import React, { createContext, useState, useEffect, useContext } from 'react';
import { findBackgroundKey } from '../utils'; // Ensure you have this utility function

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [form, setFormData] = useState(null);

  // Load initial data from local storage
  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const updateFormData = (data) => {
    const backgroundKey = findBackgroundKey(data);
    const updatedForm = { ...data, backgroundKey };
    setFormData(updatedForm);
    localStorage.setItem('formData', JSON.stringify(updatedForm));
  };

  return (
    <FormContext.Provider value={{ form, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
