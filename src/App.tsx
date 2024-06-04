import React from 'react';
import logo from './logo.svg';
import Homepage from './components/Homepage/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Homepage/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
