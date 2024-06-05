import React from 'react';
import logo from './logo.svg';
import Homepage from './components/Homepage/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Login from './components/Registration/Login/Login';
import Signin from './components/Registration/Signin/Signin';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<About/>} path='/About'/>
        <Route element={<Login/>} path='/Login'/>
        <Route element={<Signin/>} path='/Signin'/>
        <Route element={<NotFound/>} path='*'/>
      </Routes>
    </div>
  );
}

export default App;
