import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GeminiContextProvider } from './context/GeminiContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GeminiContextProvider>
 <Router>
    <App />
 </Router>
  </GeminiContextProvider>,
)
