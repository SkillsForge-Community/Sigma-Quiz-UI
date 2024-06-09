import React from 'react';
import Homepage from './components/Homepage/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import SelectQuiz from './components/Selectquiz/SelectQuiz';
import About from './components/About/About';
import NotFound from './components/NotFound';
import Login from './components/Registration/Login/Login';
import Signin from './components/Registration/Signin/Signin';
import NormalUsers from './components/NormalUsers/NormalUsers';
import SchoolDetails from './components/NormalUsers/SchoolDetails/SchoolDetails';
function App() {
  return (
    <ChakraProvider>    
      <div className="App">
      
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<NormalUsers/>} path="/users">
            <Route  index element={<SchoolDetails/>}/>
                <Route path=':schools' element={<SchoolDetails/>}/>
          </Route>

        <Route element={<SelectQuiz option='select' />} path='/select-quiz'/>
        <Route element={<SelectQuiz option='add' />} path='/add-quiz'/>
        <Route element={<SelectQuiz option='edit' />} path='/edit-quiz'/>
        <Route element={<About/>} path='/About'/>
        <Route element={<Login/>} path='/Login'/>
        <Route element={<Signin/>} path='/Signin'/>
        <Route element={<NotFound/>} path='*'/>

      </Routes>
      

    </div>
    </ChakraProvider>
  );
}

export default App;


