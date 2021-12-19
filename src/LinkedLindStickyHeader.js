import React, { useState } from 'react'
import './LinkedLindStickyHeader.css'
import BuildIcon from '@mui/icons-material/Build';
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { Routes, Route, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import NotificationsIcon from '@mui/icons-material/Notifications';
import RateReviewIcon from '@mui/icons-material/RateReview'
import SearchIcon from '@mui/icons-material/Search'

function LinkedLindStickyHeader() {
    const [{profileRendering},dispatch] = useStateValue()
    const [searchAnimation, setsearchAnimation] = useState("")
    return (
        <div className="linkedinHeader__main__container" onClick={()=>{
            if(profileRendering){
            dispatch({
            type:actionTypes.SET__PROFILE__MODAL,
            profilerendermodal:null,
        })}}}>
            <div className="image__and__search__container">
                <div className="linkedDin__logo__container">
                    <div className="image__container__for__logo"><img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="" /></div>
                </div>
                <div className="search__container sticky__text" onClick={()=>{setsearchAnimation("superwidthAnimation")}}> 
                    <div className={`superwidth ${searchAnimation}`}><SearchIcon /><input placeholder="search for skills" /></div>
                </div>
            </div> 
            <div className="icon__and__tab__container">
                <div className="first__icon__container">
                <div><Link style={{textDecoration:"none"}} to="/"><HomeIcon /><p className="sticky__text">Home</p></Link></div>
                <div><Link style={{textDecoration:"none"}} to="/MyNetWork"><PeopleAltIcon /><p className="sticky__text">My Network</p></Link></div>
                <div><Link style={{textDecoration:"none"}} to="/"><HomeRepairServiceIcon /> <p className="sticky__text">jobs</p></Link></div>
                <div><Link style={{textDecoration:"none"}} to="/message"><RateReviewIcon /><p className="sticky__text">Messaging</p></Link></div>
                <div><Link style={{textDecoration:"none"}} to="/notificatoin"><NotificationsIcon /><p className="sticky__text">Notification</p></Link></div>
                    <div onClick={()=>{
                        if(profileRendering){
                            dispatch({
                                type:actionTypes.SET__PROFILE__MODAL,
                                profilerendermodal:null,
                            })
                        }
                        else{
                            dispatch({
                                type:actionTypes.SET__PROFILE__MODAL,
                                profilerendermodal:"true",
                            })
                        }
                    }}

                        ><div className="logo__container"><Avatar style={{height:"25px",width:"25px"}} src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_200_200/0/1633930955782?e=1639299600&v=beta&t=PWdlhR84f89KKymMQB_qFN-7eGQXPKTw40YXKGTfHSo" /></div><div style={{display:"flex",justifyContent:"center", alignItmes:"center",width:"35px",height:"20px" }}> <p className="sticky__text">Me</p><ArrowDropDownIcon  style={{padding:"0px"}}/> </div></div>
                </div>
                <div className="second__icon__container"> 
                    <div><div className="logo__container"><img src="/logos/7.png" /></div><div>Work</div></div>
                    <div><div><BuildIcon/></div><div>Build</div></div>
                </div>
            </div>
{profileRendering?
           (<div className='profile__direction__container'>
                <div className="profile__header__container">
                    <div><Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_100_100/0/1633930955782?e=1639299600&v=beta&t=HBLX_QnozN2U2AeKKaDt8EE_McKedu1CkgrNRGp7Dm8" style={{height:"70px",width:"70px"}} /></div>
                    <div>
                        <p>Md Mahfuz Rana</p>
                        <p>MERN stack developer</p>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"top",height:"30px",width:"100%" }}>
                   <Link style={{display:"flex",justifyContent:"center",alignItems:"top",height:"30px",width:"100%" }}  to="/profile" ><div className="butoon__profile__redirect"><p>View Profile</p></div> </Link>
                </div>
                <div style={{height:"1px",width:"100%",backgroundColor:"lightgray"}}></div>
                <div className='account__info__redirect'>
                    <div style={{fontSize:"1.1rem", fontWeight:"bold",marginBottom:"5px",color:"black" }}><p >Account</p></div>
                    <div><p>Settings & Privacy</p></div>
                    <div><p>Help</p></div>
                    <div><p>Language</p></div>
                </div>
                <div style={{height:"1px",width:"100%",backgroundColor:"lightgray",}}></div>
                <div className='mannagge__container__redirect'>
                    <div style={{fontSize:"1.1rem", fontWeight:"bold",marginBottom:"5px",color:"black" }}><p>Manage</p></div>
                    <div><p>Posts & Activity</p></div>
                    <div><p>Job Posting Account</p></div>
                </div>
                <div style={{height:"1px",width:"100%",backgroundColor:"lightgray"}}></div>
                <div className='SignOut__container__redirect'><p>SignOut</p></div>
            </div>):(<></>)
            }
        </div>
    )
}

export default LinkedLindStickyHeader








