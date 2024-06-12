import React from 'react';
import "./App.css";
import Homepage from './components/Homepage/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import SelectQuiz from './components/Selectquiz/SelectQuiz';
import About from './components/About/About';
import AddSchool from './components/Addschool/AddSchool';
import NotFound from './components/NotFound';
import Login from './components/Registration/Login/Login';
import Signin from './components/Registration/Signin/Signin';
import NormalUsers from './components/NormalUsers/NormalUsers';
import SchoolDetails from './components/NormalUsers/SchoolDetails/SchoolDetails';
import TestDetails from './components/TestDetails/TestDetails';
import AccountSettings from './components/account_settings/AccountSettings';
import path from 'path';
import PasswordSettings from './components/account_settings/password_settings/PasswordSettings';
import ProfileSettings from './components/account_settings/profile_settings/ProfileSettings';
import MainSubAdmin from './components/Subadmin/main/Main';
import ManageUsers from './components/Subadmin/ManageUsers/ManageUsers';
import UpdateUser from './components/Update user/UpdateUser';
import UserProfile from './components/Update user Profile/UserProfile';
import UserFunctions from './components/User Functions/UserFunctions';
function App() {
  return (
    <ChakraProvider>
      <div className="App">      
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<MainSubAdmin/>} path="/subadmin">
            <Route index element={<ManageUsers/>}/>
            <Route path='manage-users' element={<ManageUsers/>}/>
              <Route path=':schools' element={<SchoolDetails/>}/>

        </Route>
        <Route element={<AddSchool quizName="2024 Roseline Etuokwu Quiz Competition" dateCreated="2024 - 05 - 30"/>}path="/Addschool"/>
        <Route element={<NormalUsers/>} path="/users">
                <Route path=':schools' element={<SchoolDetails/>}/>
          </Route>
        <Route element={<TestDetails/>} path="/users/test-details"/>
        <Route element={<SelectQuiz option='select' />} path='/select-quiz'/>
        <Route element={<SelectQuiz option='add' />} path='/add-quiz'/>
        <Route element={<SelectQuiz option='edit' />} path='/edit-quiz'/>
        <Route element={<About/>} path='/About'/>
        <Route element={<Login/>} path='/Login'/>
        <Route element={<Signin/>} path='/Signin'/>
        <Route element={<NotFound/>} path='*'/>
        <Route element={<AccountSettings />} path= {'/account-settings'}>
          <Route path='password-settings' element={<PasswordSettings />} />
          <Route path='profile-settings' element={<ProfileSettings />} />
          <Route index element={<ProfileSettings />} />
        </Route>
      </Routes>     
    </div>
    </ChakraProvider>
  );
}

export default App;


