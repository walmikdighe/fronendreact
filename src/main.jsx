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
import { Shoping } from './components/shopping/Shoping.jsx'
import { Parent } from './components/context-api/contextapi.jsx'
import { ParentComponent } from './components/context-api/parentcomponent.jsx'
import { FakestoreIndex } from './components/fakestore/fakestore-index.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
<FakestoreIndex/>

)
