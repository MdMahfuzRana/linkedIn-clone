import React from 'react'
import './MyNetWork.css'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LinkedLindStickyHeader from './LinkedLindStickyHeader'
import { Avatar } from '@material-ui/core';
import ContactsIcon from '@mui/icons-material/Contacts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import PagesIcon from '@mui/icons-material/Pages';

function MyNetWork() {
    return (
        <>
        <LinkedLindStickyHeader />
        <div className="myNetwork__main__contianer">
           <div className="myNetwork__left__estimation">
               <div className="profle__estiamtation__cotainer">
                   <div className="net__header"><p>Manage My NetWorks</p></div>
                   <div className="indetails__container">
                       <div className="icon__container">
                           <div><SupervisorAccountIcon /></div>
                           <div>Network</div>
                       </div>
                       <div><p>100+</p></div>
                   </div>
                   <div className="indetails__container">
                       <div className="icon__container">
                           <div><ContactsIcon /></div>
                           <div>Network</div>
                       </div>
                       <div><p>100+</p></div>
                   </div>
                   <div className="indetails__container">
                       <div className="icon__container">
                           <div><AssignmentIndIcon /></div>
                           <div>Network</div>
                       </div>
                       <div><p>100+</p></div>
                   </div>
                   <div className="indetails__container">
                       <div className="icon__container">
                           <div><GroupIcon /></div>
                           <div>Network</div>
                       </div>
                       <div><p>100+</p></div>
                   </div>
                   <div className="indetails__container">
                       <div className="icon__container">
                           <div><EventIcon /></div>
                           <div>Network</div>
                       </div>
                       <div><p>100+</p></div>
                   </div>
                   <div className="indetails__container">
                       <div className="icon__container">
                           <div><PagesIcon /></div>
                           <div>Network</div>
                       </div>
                       <div><p>100+</p></div>
                   </div>
               </div>
               <div className="hint__contianer"><div><div><p>Show less</p></div><div><ExpandLessIcon /></div></div></div>
               <div className="success__div__andOfer__container">
                    <div><img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" /></div>
               </div>
               <div className="foooter__cotnainer">
                   <div><h3>Add personal Contacts</h3></div>
                   <div >
                        <p>
                        Add personal contacts
                            We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite. Learn more
                        </p>
                    </div>
                    <div className="text__chack__image"><input type="text" value="mdmahfuz@gmail.com" /></div>
                    <div className="continue__button">Continue</div>
                    <div>More Options</div>
               </div>
           </div>
           <div className="connection__builder__cotainer">
               <div className="connection__status__container">
                   <div>No Pending Conection </div>
                   <div>Manage</div>
               </div>
               <div className="connnection__container">
                    <div className="connection__container__header">
                        <p>Industry Leaders in Bangladesh you May know</p>
                    </div>
                    <div className="connectoion__builder__card__conttainer">
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>
                        <div className="connection__card__contianer">
                            <div className="cover__photo__container">
                                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHBRKxqvl-yFg/profile-displaybackgroundimage-shrink_200_800/0/1636372918206?e=1643846400&v=beta&t=FhjnRh7M9_EvctbgTm26Q8uChrkBchyDH-jXCmx7hWA "  alt="" />
                            </div>
                            <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFpxYJg8HpU4g/profile-framedphoto-shrink_200_200/0/1636374350125?e=1638622800&v=beta&t=cutMEz4mSF7FF_TKOgxFw-I6NE50ESITlMcKWBdWHJE" alt="" style={{ height:"100px",width:"100px",margin:"auto",marginTop:"-50px"}}  />
                            <div style={{margin:"5px",fontSize:"1rem",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}><a>Zahid Mahmud</a></div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                                Griphics and UI designer and Instructor at Fiverrr
                            </div>
                            <div style={{margin:"5px",fontSize:".9rem",display:"flex",color:"gray",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                               <div style={{height:"25px",width:"25px",margin:"5px"}}><img style={{height:"100%",width:"100%",objectFit:"contain"}} src="https://media-exp1.licdn.com/dms/image/C4D0BAQFHz9agyy675A/company-logo_100_100/0/1635337455276?e=1646870400&v=beta&t=K-kSwtPwHlB9hzVrGkBYawK4LtlQSl6oiKCzTrBQDks" alt="" /></div> <div>Fiverr</div>
                            </div>
                            <div className="buttttton" style={{height:"35px",width:"150px",border:"1px solid blue",borderRadius:"20px",fontWeight:"bold",color:"blue",margin:"5px",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}><p>Connect</p></div>
                        </div>

                    </div>
               </div>
            </div> 
        </div>
        </>
    )
}

export default MyNetWork
