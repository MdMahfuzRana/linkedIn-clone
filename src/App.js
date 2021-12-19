import React, { useEffect, useState } from 'react'
import CustomAlertPage from './CustomAlertPage'
import LinkedInsignInLandingPage from './LinkedInsignInLandingPage'
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import PageNotFound from './PageNotFound';
import LinkedInHomePage from './LinkedInHomePage';
import GlobalLoader from './GlobalLoader.js'
import MessagingHome from './MessagingHome';
import MyNetWork from './MyNetWork';
import './App.css'
import MessagePage from './MessagePage';
import  { Navigate  } from 'react-router-dom'
import  Axios  from './Axios'
import ProfilePage from './ProfilePage';
import NotificationPage from './NotificationPage';

function App() {

  const [user, setuser] = useState(null)


  return (
    <div className="app">
      <Routes>
        <Route path="/" exact={true} element={<LinkedInHomePage />} />
        <Route path="/MyNetWork" exact={true} element={<MyNetWork />} />
        <Route path="/signUplandingPage" exact={true} element={<LinkedInsignInLandingPage />} />  
        <Route path="/signUp" exact={true} element={<SignUp />} />  
        <Route path="/login" exact={true} element={<Login />} />   
        <Route path="*" element={<PageNotFound />} />
        <Route path="/message" exact={true} element={<MessagePage />} />
        <Route path="/profile" exact={true} element={<ProfilePage />} />
        <Route path="/notificatoin" exact={true} element={<NotificationPage />} />
        {/* <Route path="/" exact={true} element={<GlobalLoader />} /> */}
      </Routes>
      {/* <LinkedInHomePage /> */}
      <CustomAlertPage />
    </div>
  )
}

export default App
