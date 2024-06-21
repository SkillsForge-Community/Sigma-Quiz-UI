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
import SchoolDetails from './Global Components/SchoolDetails/SchoolDetails';
import TestDetails from './Global Components/TestDetails/Index';
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
import Questions from "./Pages/Questions/Questions";
import Scores from "./Pages/Scores/Scores";
import { Provider } from 'react-redux';
import { store } from './app/store';
import RequireAuth from './Global Components/RequireAuth';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          <Routes>
            {/*Public Routes*/}
            <Route element={<Homepage />} path='/' />
            <Route element={<Login />} path='/Login' />
            
            <Route element={<About />} path='/About' />
            <Route element={<NotFound />} path='*' />
              <Route element={<MainSubAdmin />} path="/users">
              <Route index element={<SchoolDetails  />} />

                <Route path=':schools' element={<SchoolDetails  />} />
            </Route> 
            <Route element={<TestDetails isAdmin={false} />} path="/users/test-details" />
            {/* Protected routes*/}
            <Route element={<RequireAuth/>}>
            <Route element={<Signin />} path='/Signin' />
              <Route element={<MainSubAdmin />} path="/subadmin">
                <Route index element={<ManageUsers />} />
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path=":schools" element={<SchoolDetails />} />
                <Route path="manage-questions" element={<Questions />} />

                <Route element={<AccountSettings />} path={"account-settings"}>
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
              <Route element={<Scores />} path="/all-scores" />
              <Route element={<TestDetails isAdmin={true} />} path="/subadmin/test-details" />
              <Route element={<SelectQuiz option='select' />} path='/select-quiz' />
              <Route element={<SelectQuiz option='add' />} path='/add-quiz' />
              <Route element={<SelectQuiz option='edit' />} path='/edit-quiz' />

              <Route element={<Round />} path='/round'/>
              <Route element={<AddEditRound />} path='/round/add'/>
              <Route element={<AddEditRound />} path='/round/edit'/>
            </Route>
          </Routes>
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;


