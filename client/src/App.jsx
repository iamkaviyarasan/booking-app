import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Indexpage from './assets/pages/Indexpage';
import LoginPage from './assets/pages/LoginPage'
import Layout from './Layout';
import RegisterPage from './assets/pages/RegisterPage';
import axios from "axios";

axios.defaults.baseURL ='http://localhost:4000';

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Indexpage />} />
    <Route path="/login" element={<LoginPage/>}/>  
    <Route path="/register" element={<RegisterPage/>}/>  


      </Route>
    </Routes>
 
  )
}

export default App
