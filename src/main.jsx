import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'
import './styles/index.css'
import { FormProvider } from './Context/form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
    <App />
    </FormProvider>
  </React.StrictMode>,
)
