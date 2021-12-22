import React, { useState } from 'react'
import CustomAlertPage from './CustomAlertPage'
import './LinkedInsignInLandingPage.css'
import SignInForm from './SignInForm'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './userSlice';
import { useStateValue } from './StateProvider';
import Axios from './Axios';
import { actionTypes } from './reducer';


function LinkedInsignInLandingPage() {
  const globalUser = useSelector(selectUser)
  const [user, setuser] = useState("null")
  const userDispatch = useDispatch()
  const [{permitedToOpenModal,authUser},dispatch] = useStateValue()

    return (
        <>
{authUser?     (<>
            <Navigate to="/" />
        </>):
        (
            <div className="signIn__main__container">
                        <div className="header__line__div">
                            <div className="image__container__login__landing"><img src="https://static-exp1.licdn.com/sc/h/8fkga714vy9b2wk5auqo5reeb" alt="" /></div>
                            <div className="topSign__container">
                                
                                    <div className="join__cotainer">
                                    <Link to="/signUp"  style={{ color: 'inherit', textDecoration: 'inherit'}} >Join Now</Link></div>
                                
                                    <div className="signIn__cotainer"><Link to="login"  style={{ color: 'inherit', textDecoration: 'inherit'}} > SignIn </Link></div>
                            </div>
                        </div>
                        <div className="login__body__container">
                            <div className="form__container">
                                <div>
                                    <a>Welcome to your professional community</a>
                                </div>
                                <SignInForm />
                            </div>
                            <div className="background__container">
                            </div>
                        </div>
                    </div>
            )
        
        
        }
        </>
        
    )
}

export default LinkedInsignInLandingPage
