import React from 'react';
import "./App.css";
import Homepage from './Pages/Homepage/Index';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import SelectQuiz from "./Pages/Selectquiz/Index";
import About from './Pages/About/Index';
import AddSchool from './Pages/Addschool/Index';
import NotFound from './Global Components/NotFound';
import Login from './Pages/Login/Index';
import Signin from './Pages/Signin/Index';
import NormalUsers from './Pages/NormalUsers/Index';
import SchoolDetails from './Pages/NormalUsers/SchoolDetails/SchoolDetails';
import TestDetails from './Pages/NormalUsers/TestDetails/Index';
import AccountSettings from './Pages/Subadmin/account_settings/AccountSettings';
import PasswordSettings from './Pages/Subadmin/account_settings/password_settings/PasswordSettings';
import ProfileSettings from './Pages/Subadmin/account_settings/profile_settings/ProfileSettings';
import MainSubAdmin from './Pages/Subadmin/Index';
import ManageUsers from './Pages/Subadmin/ManageUsers/ManageUsers';
import UpdateUser from './Pages/Subadmin/Update user/Index';
import UserProfile from './Pages/Subadmin/Update user/Update user Profile/UserProfile';
import UserFunctions from './Pages/Subadmin/Update user/User Functions/UserFunctions';
import Round from './Pages/Round/Round';
import AddEditRound from './Pages/Round/AddEditRound';
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route element={<Homepage />} path='/' />
          <Route element={<MainSubAdmin />} path="/subadmin">
            <Route index element={<ManageUsers />} />
            <Route path='manage-users' element={<ManageUsers />} />
            <Route path=':schools' element={<SchoolDetails />} />
            <Route element={<AccountSettings />} path={'account-settings'}>
              <Route index element={<ProfileSettings />} />
              <Route path='password-settings' element={<PasswordSettings />} />
              <Route path='profile-settings' element={<ProfileSettings />} />
            </Route>
          </Route>
          <Route element={<UpdateUser />} path="/subadmin/update-user">
            <Route index element={<UserProfile />} />
            <Route path='profile' element={<UserProfile />} />
            <Route path='user-functions' element={<UserFunctions />} />
          </Route>
          <Route element={<AddSchool quizName="2024 Roseline Etuokwu Quiz Competition" dateCreated="2024 - 05 - 30" />} path="/Addschool" />
          <Route element={<Round />} path='/round'/>
          <Route element={<AddEditRound />} path='/round/add'/>
          <Route element={<AddEditRound />} path='/round/edit'/>
          <Route element={<NormalUsers />} path="/users">
            <Route path=':schools' element={<SchoolDetails />} />
          </Route>
          <Route element={<TestDetails />} path="/users/test-details" />
          <Route element={<SelectQuiz option='select' />} path='/select-quiz' />
          <Route element={<SelectQuiz option='add' />} path='/add-quiz' />
          <Route element={<SelectQuiz option='edit' />} path='/edit-quiz' />
          <Route element={<About />} path='/About' />
          <Route element={<Login />} path='/Login' />
          <Route element={<Signin />} path='/Signin' />
          <Route element={<NotFound />} path='*' />
          
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;


