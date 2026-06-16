import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Alerts from './pages/Alerts.jsx'
import Integrations from './pages/Integrations.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/integrations' element={<Integrations />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
)