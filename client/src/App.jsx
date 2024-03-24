import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Indexpage from './assets/pages/Indexpage';
import LoginPage from './assets/pages/LoginPage';
import Layout from './Layout';

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

      </Route>
      <Route index element={<Indexpage />} />
    <Route path="/Login" element={<LoginPage/>}/>  
    </Routes>
 
  )
}

export default App
