import React from 'react'
import LinkedLindStickyHeader from './LinkedLindStickyHeader'
import './ProfilePage.css'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Avatar, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function ProfilePage() {
    return (
        <div className='profilePage__main__container'>
            <LinkedLindStickyHeader />
            <div className='profile__bar__of__the__user'>
                <div className='profile__coverphoto__div__andAvatar'>
                   <div className='cover__photo__profile'><img src="https://media-exp1.licdn.com/dms/image/C5616AQElDlNPv1Ul-g/profile-displaybackgroundimage-shrink_200_800/0/1633931380459?e=1645056000&v=beta&t=xFBGdjsAndkSxGEVVg50EkS09_KP6MD_y7GzwnhIyRs" />
                   </div>
                   <div className='change__and__edit__covverPhoto__pn'><DriveFileRenameOutlineIcon /></div>
                    <div className='Avatar__containre__for__profile'><Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_200_200/0/1633930955782?e=1639386000&v=beta&t=zDvhQAz6Daa2Zg_FmSmz195bdQPJKI6gXJg2yiksZnY" alt="" style={{height:"150px",width:"150px"}} />
                    </div>
                    <div className='pen__for__profile__summary__container__edit'>
                        <DriveFileRenameOutlineIcon />
                    </div>
                    <div className='profile__person__info__continer'>
                        <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"top"}}>
                            <div style={{width:"50%"}}>
                                <div style={{width:"100%",fontSize:"1.5rem",fontWeight:"bold"}}>
                                    <p>Cleaver Mahfuz</p>
                                </div>
                                <div style={{width:"100%",fontSize:"1rem"}}>
                                    <p>MERN Stack Developer</p>
                                </div>
                                <div style={{width:"100%",fontSize:".8rem"}}>
                                    <p>Araihazar Upazila, Dhaka, Bangladesh  Contact info</p>
                                </div>
                                <div style={{height:"20px",padding:"5px",paddingLeft:"0" ,width:"100%",fontSize:".9rem",color:"rgb(10 102 194)"}}>
                                    <p>69 connection</p>
                                </div>
                            </div>
                            <div style={{height:"40px",width:"50%",display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:".9rem",color:"gray"}}><img style={{height:"100%",width:"fit-content",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1647475200&v=beta&t=k3B1Z3ndvdjJvE3Vd4jm-RMq6_qHNX7agaix6tiOnRE" alt="" /><p style={{marginLeft:"5px"}}>Fiverr</p></div>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:'center'}} className='button__container' >
                        <div style={{width:"100px",padding:"7px",marginLeft:"20px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px" ,fontWeight:"bold",color:"lightgray",backgroundColor:"rgb(10 102 194)"}} ><p>Open To</p>
                        </div>
                        <div style={{width:"100px",marginLeft:"10px",padding:"7px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px" ,color:"black",border:"1px solid lightgray"}} ><p>Open To</p>
                        </div>
                        <div style={{width:"100px",marginLeft:"10px",padding:"7px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px" ,color:"black",border:"1px solid lightgray"}} ><p>Open To</p>
                        </div>
                    </div>
                    <div style={{padding:"20px",height:"fit-content",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

                        <div style={{height:"80px",width:"49%",backgroundColor:"lightgray",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",fontSize:".9rem" }}>
                            <div>
                                <p> Open to work</p>
                                <p>
                                    Web Developer, Web Designer, Frontend Developer...
                                    See all details
                                </p>
                            </div>
                            <div style={{width:"35px",height:"100%",display:"flex",justifyContent:"center",alignItems:'top'}}>
                                <DriveFileRenameOutlineIcon />
                            </div>
                        </div>
                        <div style={{height:"80px",width:"49%",backgroundColor:"lightgray",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",fontSize:".9rem" }}>
                            <div>
                                <p> Open to work</p>
                                <p>
                                    Web Developer, Web Designer, Frontend Developer...
                                    See all details
                                </p>
                            </div>
                            <div style={{width:"35px",height:"100%",display:"flex",justifyContent:"center",alignItems:'top'}}>
                                <DriveFileRenameOutlineIcon />
                            </div>
                        </div>    

                    </div>
                </div> 

                <div className='profile__strenth__profile__power__container'>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div><p style={{fontSize:"1.3rem"}}>Profile Strength: <strong>Intermediate</strong></p></div>
                        <div><IconButton><KeyboardArrowDownIcon /></IconButton></div>
                    </div>
                    <div className='profile__sign' style={{height:"50px",width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                        <div className='profile__strenth__sign'>
                            <div></div>
                        </div>
                        <div className='profile__strenth__sign'>
                            <div></div>
                        </div>
                        <div className='profile__strenth__sign'>
                            <div></div>
                        </div>
                        <div className='profile__strenth__sign pxWidth'>
                            <div></div>
                        </div>
                        <div className='profile__strenth__sign pxWidth'>
                            <div></div>
                        </div>
                    </div>
                    <div className='intermidiate'>
                        <AssignmentReturnedIcon />
                    </div>
                    <div className='expertProfile'>
                        <StarOutlineIcon />
                    </div>
                    <div className='Submit__profile__and__skillss__container'>
                        <div className='Take__asiggnment__container'><img src="https://static-exp2.licdn.com/sc/h/5c9e0v28ilvp9ocpnqbfm7ll2" alt="" /></div>
                        <div className='take__assign__description'>
                            <p style={{marginTop:"5px"}}><strong>Which university or school did you attend?</strong></p>
                            <p>Add your school so that classmates and alumni can easily find you</p>
                        </div>
                    </div>
                    <div style={{height:"60px",width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
                    <div style={{height:"35px",width:"130px",display:'flex',justifyContent:"center",alignItems:"center",borderRadius:"20px"}}><p>does not apply</p></div>
                        <div style={{height:"35px",width:"130px",display:'flex',justifyContent:"center",alignItems:"center",color:"white",marginLeft:"10px",backgroundColor:"rgb(10 102 194)",borderRadius:"20px"}}><p>does not apply</p></div>
                    </div>
                </div>

                <div className='dashboard__container__main'>
                    <div>
                       <p style={{fontSize:"1.3rem"}}><strong>Your Dashboard</strong></p> 
                    </div>
                    <div>
                       <p style={{color:"#595d61"}}><i>Private to you</i></p> 
                    </div>
                    <div className='profile__pixel__result'>
                        <div style={{width:"33.5%",backgroundColor:"white",padding:"10px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px" ,borderTopRightRadius:"0px",borderBottomRightRadius:"0px",fontSize:".9rem"}}>
                            <p style={{color:"rgb(23 111 197)",fontSize:"2.3rem"}}>{"0"}</p>
                            <p>Who Viewed your Profile</p>
                        </div>
                        <div style={{width:"33.5%",backgroundColor:"white",padding:"10px",borderLeft:".5px solid lightgray",borderRight:".5px solid lightgray",fontSize:".9rem"}}>
                            <p style={{color:"rgb(23 111 197)",fontSize:"2.3rem"}}>{"0"}</p>
                            <p>Post View</p>
                        </div>
                        <div style={{width:"33.5%",backgroundColor:"white",padding:"10px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px" ,borderTopRightRadius:"10px",borderBottomRightRadius:"10px",fontSize:".9rem"}}>
                            <p style={{color:"rgb(23 111 197)",fontSize:"2.3rem"}}>{"0"}</p>
                            <p>Search appearances</p>
                        </div>
                    </div>

                    <div className='netWork__filter__container'>
                        <div  style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",fontSize:".9rem",backgroundColor:"white"}}>
                            <div style={{width:"fit-Content"}}>
                                <TravelExploreIcon />
                            </div>
                            <div style={{width:"100%",padding:"10px",borderBottom:"1px solid lightgray",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left"}}>
                                <p><strong>Creator mode:</strong> Off</p>
                                <p>
                                Grow your audience and get discovered by highlighting content on your profile.
                                </p>
                            </div>
                        </div>
                        
                        <div  style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",fontSize:".9rem",backgroundColor:"white"}}>
                            <div style={{width:"fit-Content"}}>
                                <TravelExploreIcon />
                            </div>
                            <div style={{width:"100%",padding:"10px",borderBottom:"1px solid lightgray",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left"}}>
                                <p><strong>Creator mode:</strong> Off</p>
                                <p>
                                Grow your audience and get discovered by highlighting content on your profile.
                                </p>
                            </div>
                        </div>

                        <div  style={{borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",fontSize:".9rem",backgroundColor:"white"}}>
                            <div style={{width:"fit-Content"}}>
                                <TravelExploreIcon />
                            </div>
                            <div style={{width:"100%",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left"}}>
                                <p><strong>Creator mode:</strong> Off</p>
                                <p>
                                Grow your audience and get discovered by highlighting content on your profile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile__right__container__main'>

            </div>
        </div>
    )
}

export default ProfilePage
