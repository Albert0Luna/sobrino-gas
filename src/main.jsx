import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { UbicationProvider } from './contexts/ubicationContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UbicationProvider>
      <App />
  </UbicationProvider>
  </BrowserRouter>

)
