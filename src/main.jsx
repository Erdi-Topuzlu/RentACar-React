import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.jsx';

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<Homepage/>} />
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
  </Route>

  
 )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <RouterProvider fallbackElement={<SignIn />} router={router} />
     </ThemeProvider>
  </React.StrictMode>,
)
