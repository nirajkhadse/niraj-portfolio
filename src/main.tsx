import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 🪄 NEW: Import BrowserRouter
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/niraj-portfolio">
    <App />
  </BrowserRouter>
);
