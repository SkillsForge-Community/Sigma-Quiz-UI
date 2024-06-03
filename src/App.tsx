import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
