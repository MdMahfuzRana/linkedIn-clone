import React,{useEffect, useState} from 'react'
import Axios from "./Axios.js"
import './SignUp.css'
import {useDispatch, useSelector} from 'react-redux'
import {login,logout,selectUser} from './userSlice'

function SignUp() {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const user = useSelector(selectUser)

    const doDispatch = useDispatch()

    // useEffect(() => {
    //     if(email){
    //         Axios.post('/signUp',{
    //             email:email,
    //         })
    //     }
    // }, [email])
    const handleSubmit = () => {
        if(email&&password){
            Axios.post('/signUp',{
                email:email,
                password:password
            })
        }
        setemail("")
        setpassword("")
    }

    return (
        <div className="signUp__main__contianer">
           <div className="signUP__logo__container"><div><img src="https://static-exp1.licdn.com/sc/h/8fkga714vy9b2wk5auqo5reeb" /></div></div>
           <div><h1>Make the most of your professional Life</h1></div>
           <div className="signUP_register__container">
               <div>
               <div>Email</div>
               <div className="signUP__email__container"><input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /></div>
               </div>

               <div>
               <div>Password</div>
               <div className="signUP__email__container"><input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} /></div>
               </div>
               
               <div className="agreement__container">
                   <p>
                   By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
                   </p>
               </div>
               <div className="bluer__agreeeand__join" onClick={handleSubmit}><p>Agreee and Join</p></div>
               <div className="border_room">
                   <div className="border__signIP"></div>
                   <div><p>or</p></div>
                   <div className="border__signIP"></div>
               </div>
                <div className="bluer__agreeeand__join__with__google" >
                    <div className="lgoo___container__signIN">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6PAXPjbuPq4vjI2ptsTunml_wUCPmZlM8A&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <p>SignIn With Google</p>
                    </div>
              </div>
           </div>
        </div>
    )
}

export default SignUp
