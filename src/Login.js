import React from 'react'
import './login.css'
import SignInForm from './SignInForm'

function Login() {
    return (
        <div className="signIn__container__div">
            <div className="image__container__forSignIn__logo">
                 <img src="https://static-exp1.licdn.com/sc/h/8fkga714vy9b2wk5auqo5reeb" alt="" />  
            </div>
            <h1>
                Make the most of your professional life
            </h1>
            <SignInForm />
        </div>
    )
}

export default Login
