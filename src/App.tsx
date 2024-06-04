import React from 'react';
import logo from './logo.svg';
import Homepage from './components/Homepage/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import SelectQuiz from './components/Selectquiz/SelectQuiz';
import AddQuiz from './components/Addquiz/AddQuiz';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<SelectQuiz option='select' />} path='/select-quiz'/>
        <Route element={<SelectQuiz option='add' />} path='/add-quiz'/>
      </Routes>
    </div>
  );
}

export default App;
