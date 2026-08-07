import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { CookiesProvider } from 'react-cookie';
import { RouterProvider } from 'react-router-dom';
import { router } from 'json-server';


createRoot(document.getElementById('root')).render(
 <CookiesProvider>
    <RouterProvider router={router}/>
 </CookiesProvider>
=======
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
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { FormDemo } from './components/form-demo/form-demo.jsx'

createRoot(document.getElementById('root')).render(
 <FormDemo/>


>>>>>>> 35e6d68148eb0fd501e9217e41d93d6a9faf8572
)
