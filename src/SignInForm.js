import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import validator from 'validator'
import {res, validate} from 'react-email-validator';
import Axios from './Axios.js'
import  { Navigate  } from 'react-router-dom'



function SignInForm() {

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [EmailError, setEmailError] = useState(null)
    const [passworderror, setpassworderror] = useState(null)
    const [authUser, setauthUser] = useState(null)
    const [errorMassage, seterrorMassage] = useState("Provide me with correct info!")
    const [succesMessage, setsuccesMessage] = useState("successfully loggedIn")


    const signIn = (e) => {
        if(!(email&&password)){
            alert("please fill the box")
        }
        else{
            validate(email);
            if(res){
                // the email is valid
                if(password.length<8){
                    alert("enter valid password")
                    setpassworderror("null")
                }
                else{
                    if(password.length>12){
                        alert("enter valid password")
                        setpassworderror("null")
                    }
                    else{
                        if(email&&password){
                            console.log(email && password)
                            Axios.post("/userinfo/sign",{
                                email:email,
                                password:password,
                            }).then(res=>{
                                localStorage.setItem("token",res.data.token)
                                seterrorMassage(res.data.message)
                                console.log(errorMassage)
                                console.log(succesMessage)
                                if(errorMassage==="sucess"){
                                    Axios.get('/authenticatduser',{
                                        'headers': {
                                          'Authorization': 'Bearer ' + localStorage.getItem('token')
                                        }
                                        }).then(playload=>{
                                            setauthUser(playload.data)
                                        })
                                }
                            })
 
                        }
                    }
                }
            }else {
                // the email is invalid
                setEmailError("error")
                alert("email is not valided")
            }
            
        }

    }

    useEffect(() => {
        signIn()
    }, [])

   const  myToken = localStorage.getItem('token')
console.log("this is the user " + JSON.stringify(myToken))


    return (
        <div className="form__content__container">
            <div className="input__text">
                <input type="text" value={email} placeholder="Email or Phone Number" onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="input__text">
                <input type="password" value={password} placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                {/* <VisibilityIcon /> */}
            </div>
            <div className="forgot__container">
                <p>forgot Password?</p>
            </div>
            <div className="SignINbutton__withLinkedIN__account" type="submit" onClick={signIn}>
                <p>SignIn</p>
            </div>
            <div className="orContainer">
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <div className="SignINbutton" >
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6PAXPjbuPq4vjI2ptsTunml_wUCPmZlM8A&usqp=CAU" alt="" />
                </div>
                <div>
                    <p>SignIn With Google</p>
                </div>
            </div>
    </div>
    )
}

export default SignInForm
