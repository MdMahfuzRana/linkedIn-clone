import React, { useState } from 'react'
import './ChatBox.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VideoCallIcon from '@material-ui/icons/VideoCall'
import { Avatar, IconButton } from '@mui/material';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import GifIcon from '@material-ui/icons/Gif';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



function ChatBox() {
    const [greenLightClassDance, setgreenLightClassDance] = useState("green__effects")
    return (
        <div className="chat__box__main">
           <div className="chat__box__header"> 
                <div className="header___user__info">
                    <div style={{fontSize:".9rem",fontWeight:"bold"}}><p>Md Mahfuz Rana</p></div>
                    <div style={{fontSize:".7rem",color:"gray"}}><p>MERN stack developer</p></div>
                </div>
                <div className="chat__box__header__icon">
                    <MoreHorizIcon style={{fontSize:"2rem"}}/>
                    <VideoCallIcon style={{fontSize:"2rem"}}/>
                </div>
            </div> 
           <div className="massge___text__visualize">
               <div >
                   <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQENKJ0qK2R8kg/profile-displayphoto-shrink_100_100/0/1634692767926?e=1644451200&v=beta&t=hE4Hv_BIi8IJEVXLOTRS1vO9gS7HDoKIeJUU5H5n8ZM" style={{height:"80px",width:"80px"}} />
                   <div style={{fontSize:"1rem",fontWeight:"bold",marginTop:"10px"}}><p>Mahfuz Rana</p></div>
                   <div style={{fontSize:".8rem",marginTop:"4px"}}><p>MERN stack developer</p></div>
                   <div style={{height:"1px",width:"100%",backgroundColor:"gray",marginTop:"5px"}}></div>
               </div>
               <div>
                   <div className="messsgaes">
                        <div style={{padding:"5px"}}><Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_100_100/0/1633930955782?e=1638777600&v=beta&t=ekO4zQxY4HmriLlBJoxxHLCMxepfjzzdo9MOQvNsMs0" /></div>
                        <div style={{padding:"5px"}}>
                            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <div style={{padding:"5px"}}>Md Mafuz Rana</div>
                                <div style={{padding:"5px"}}>Time</div>
                            </div>
                            <div>
                                <p>
                                yboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid          
                                </p>
                            </div>
                        </div>
                   </div>
                   <div className="messsgaes">
                        <div style={{padding:"5px"}}><Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQENKJ0qK2R8kg/profile-displayphoto-shrink_100_100/0/1634692767926?e=1644451200&v=beta&t=hE4Hv_BIi8IJEVXLOTRS1vO9gS7HDoKIeJUU5H5n8ZM" /></div>
                        <div style={{padding:"5px"}}>
                            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <div style={{padding:"5px"}}>Md Mafuz Rana</div>
                                <div style={{padding:"5px"}}>Time</div>
                            </div>
                            <div>
                                <p>
                                yboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid          
                                </p>
                            </div>
                        </div>
                   </div>
                   <div className="messsgaes">
                        <div style={{padding:"5px"}}><Avatar /></div>
                        <div style={{padding:"5px"}}>
                            <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <div style={{padding:"5px"}}>Md Mafuz Rana</div>
                                <div style={{padding:"5px"}}>Time</div>
                            </div>
                            <div>
                                <p>
                                yboard        
                                </p>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
           <div className="chat__footer">
                <div className="green__border"><div className={`"" ${greenLightClassDance}`}></div></div>
                <div className="text__fielsd__message">
                    <div className="text__containe__massr"><input type="text" placeholder="write something" /></div>
                    <div><ExpandLessIcon /></div>
                </div>
                <div className="chat__footer__action__container">
                    <div style={{padding:"5px",color:"gray"}}>
                        <IconButton><PhotoSizeSelectActualIcon /></IconButton>
                        <IconButton><AttachFileIcon /></IconButton>
                        <IconButton><GifIcon /></IconButton>
                        <IconButton><SentimentSatisfiedAltIcon /></IconButton>
                    </div>
                    <div style={{padding:"5px",display:"flex",justifyContent:"center",alignItems:"top",color:"gray"}}>
                        <div style={{padding:"5px",height:"25px",marginTop:"8px",width:"55px",fontSize:"small",backgroundColor:"blue",display:'flex',justifyContent:"center",alignItems:"center",color:"white",borderRadius:"20px"}}>
                            <IconButton style={{fontSize:"small",color:"white"}}><p>Send</p></IconButton>
                        </div>
                        <div> <IconButton><MoreHorizIcon /></IconButton></div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ChatBox
