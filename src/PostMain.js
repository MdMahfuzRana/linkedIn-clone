import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './PostMain.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ReactPlayer from 'react-player'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Axios from './Axios.js'
import SendIcon from '@mui/icons-material/Send';

function PostMain({id,like,file}) {
    
    const [imageContainer, setimageContainer] = useState(null)
    const [videoContainer, setvideoContainer] = useState(null)
    const [liked, setliked] = useState(null)
    const [a, seta] = useState(0)
    const [likers, setlikers] = useState(null)
    const [displayNone, setdisplayNone] = useState("dispalay__none__effect")
    const [comment, setcomment] = useState(null)
    const [StyleEffects, setStyleEffects] = useState("")
    const [dbComment, setdbComment] = useState("ভাই আমার বাড়ি মাদারীপুর ৷ আমি আপনার ব্লগের নিয়মিত পাঠক ৷ আমার একটি প্রশ্ন হলো, আমার একটি non hosted অ্যাডসেন্স আছে ৷ আমি কি তা আমার ইউটিউবে অ্যাড করতে পারব? জানাবেন প্লিজ ৷")


useEffect(() => {
    const fileName = file[0].split('.')
    if(fileName[2]==="mp4" || fileName[2]==="mp4" || fileName[2]==="mp3" || fileName[2]==="mp"){
        setvideoContainer("true")
        setimageContainer(null)
    }
    else{
        setimageContainer("true")
        setvideoContainer(null)
    }
    // like.forEach(likers => {
    //     console.log(likers.userId)
    // });
    for(var i=0;i<like.length;i++){
        if(like[i].userId==="authUserIdtest"){
            setliked("null")
        }
    }
}, [a])

console.log(dbComment.length)
if(dbComment.length>=100){
    console.log("huge comment")
}
else{
    console.log("little comment")
}
    return (
        <div className="post__container">
            <div className="post__header">
                <div className="post__header__Avatar__container">
                    <div><Avatar /></div>
                    <div style={{fontSize:".8rem"}} className="header__time__beside__avatar">
                        <p>MD Mahfuz Rana</p>
                        <p>MERN stack developer</p>
                        <p>just now</p>
                    </div>
                </div>
                <div className="three__dots__container">
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="post__desc">
                <p>this is the post description container</p>
            </div>
            <div className="post__image__container">
{videoContainer?   
               (<div className="video__container">
                <ReactPlayer
                    className='react-player'
                    url={`/images/${file[0]}`}
                    width='100%'
                    controls
                    />
                 </div>):(
                   <div className="video__container">
                        <img src={`/images/${file[0]}`} alt="" />
                    </div>  
                 )
                 
                }
            </div>
            <div className="post__foooter">
                <div className="react__result__field">
                    <div>like {like?.length}</div>
                    <div>1 Comment</div>
                </div>
                <div className="border"></div>
                <div className="react__event__field">
                    <div onClick={()=>{
                        if(liked){
                            Axios.post("/likeRemove",{
                                id:id,
                                react:"liked",
                                userProfileId:"authUserIdtest",
                                userProfileAvatar:"userProfileAvatar",
                                displayName:"displayName"
                            })
                            setliked(null)
                        }
                        else{
                            Axios.post("/likeAdd",{
                                id:id,
                                react:"liked",
                                userProfileId:"authUserIdtest",
                                userProfileAvatar:"userProfileAvatar",
                                displayName:"displayName"
                            })
                            setliked("true")
                        }
                    }} className="react">{liked? (<ThumbUpIcon />) : (<ThumbUpAltOutlinedIcon />)  }<p>Like</p></div>
                    <div className="react" onClick={()=>{if(displayNone){setdisplayNone(null)}else{setdisplayNone("dispalay__none__effect")}}}><ChatBubbleOutlineIcon /><p>Comment</p></div>
                    <div className="react"><ShareOutlinedIcon /><p>Share</p></div>
                    <div className="react"><SendOutlinedIcon /><p>Send</p></div>
                </div>
                <div className='user__comment__section'>
                    <div className={`comment__div ${displayNone}`}>
                        <div ><Avatar /></div>
                        <div style={{backgroundColor:"lightgray",paddingTop:"5px",marginLeft:"5px"}}>
                            <a style={{fontWeight:"bold"}}>Md Mahfuz Rana</a>
                            <a>MERN stack developer</a>
                            <p>
                            {dbComment}
                            </p>
                        </div>
                    </div>
{comment?               (<div className={`comment__div ${displayNone}`}>
                        <div ><Avatar /></div>
                        <div style={{backgroundColor:"lightgray",paddingTop:"5px",marginLeft:"5px"}}>
                            <a style={{fontWeight:"bold"}}>{}</a>
                            <a>{}</a>
                            <p>
                             {comment}
                            </p>
                        </div>
                    </div>):
                    (<></>)}
                </div>
                <div  className={`comment__write__section__container ${displayNone} `}>
                     <Avatar />
                     <div style={{height:"35px",width:"70%",borderRadius:"20px",border:"1px solid lightgray"}}><input className='input' onChange={(e)=>{
                         setcomment(e.target.value)
                         if(comment){
                             setStyleEffects("powerStyle")
                         }
                         else{
                             setStyleEffects(null)
                         }
                         }} type="text" placeholder='write down your comment' /></div>
                     <IconButton><SendIcon /></IconButton>
                </div>
            </div>
        </div>
    )
}

export default PostMain
