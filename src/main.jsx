import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/login/Login.jsx'
import Productmap from './components/productitems/Productmap.jsx'
import { Databinding } from './components/databinding/Databinding.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json'
import { Weather } from './components/weather/Weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Weather/>
  </StrictMode>,
)
