import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greet from './components/Greet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greet /> */}
    <App />
  </StrictMode>,
)

// 57:52