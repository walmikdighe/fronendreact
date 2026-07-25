import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/login/Login.jsx'
import Productmap from './components/productitems/Productmap.jsx'
import { Databinding } from './components/databinding/Databinding.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Weather } from './components/weather/Weather.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Weather/>
  </StrictMode>,
)
