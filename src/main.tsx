import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This is the entry point for the application.
// It uses React's createRoot to render the App component into the DOM element with id 'origin'.
// The StrictMode wrapper is used to highlight potential problems in the application. 
// It activates additional checks and warnings for its descendants.
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )