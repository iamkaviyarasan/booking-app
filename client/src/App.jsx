import React, { useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Indexpage from './assets/pages/Indexpage';
import LoginPage from './assets/pages/LoginPage'
import Layout from './Layout';
import RegisterPage from './assets/pages/RegisterPage';
import axios from "axios";
import {UserContextProvider} from "./UserContext"

axios.defaults.baseURL ='http://127.0.0.1:4000';
axios.defaults.withCredentials = true;
function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Indexpage />} />
    <Route path="/login" element={<LoginPage/>}/>  
    <Route path="/register" element={<RegisterPage/>}/>  


      </Route>
    </Routes>
    </UserContextProvider>
 
  )
}

export default App
