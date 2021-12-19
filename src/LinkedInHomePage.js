import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import InputField from './InputField'
import './LinkedInHomePage.css'
import LinkedLindStickyHeader from './LinkedLindStickyHeader'
import PostMain from './PostMain'
import Sidebar__container from './Sidebar__container'
import  Axios  from './Axios'
import  { Navigate  } from 'react-router-dom'
import ChatUserList from './ChatUserList'
import ChatBox from './ChatBox'
import {useDispatch, useSelector} from 'react-redux'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import InfiniteScroll from 'react-infinite-scroll-component';

function LinkedInHomePage() {

    const [status, setstatus] = useState("")
    const [readyToChat, setreadyToChat] = useState(null)
    const [clickedMessageHeader, setclickedMessageHeader] = useState(null)
    const [image, setimage] = useState(null)
    const [text, settext] = useState('')
    const [video, setvideo] = useState(null)
    const [file, setfile] = useState(null)
    const [{permitedToOpenModal,profileRendering},dispatch] = useStateValue()

    const [posts, setposts] = useState(null)
    const [postsLenth, setpostsLenth] = useState(0)
    const fecthData = async () => {
        await Axios.get("/publicPosts")
            .then((playload) => {
                setposts(playload.data);
            });
    };
    useEffect(() => {
        fecthData();
        setpostsLenth(posts?.length)
    }, [posts]);

    useEffect(() => {

    }, [permitedToOpenModal])
    const openModal = () => {
        // doDispatch(login({user:"noUSer"}))
        dispatch({
            type:actionTypes.SET__PERMIT__AND__INFO,
            permitInfo:"permit"
        })
        // console.log(user)
    }
    const closeModal = () => {
        // doDispatch(login({user:"noUSer"}))
        dispatch({
            type:actionTypes.SET__PERMIT__AND__INFO,
            permit:null
        })
        if(image||text||video){
            setimage(null)
            settext('')
            setvideo(null)
            setfile(null)
        }
        // console.log(user)
    }

    const submitPost = (e) => {
        e.preventDefault()
        if(file||text){
            const postData = new FormData()
            postData.append("userName","demoUser")
            postData.append("avatar","demoAvatar")
            postData.append("text",text)
            postData.append("file",file)

            Axios.post('/uplaodPost',postData)
        }
        closeModal()
    }

const refresh = () => {
    window.location.reload();
}




    return (
        <div className="linkedInhome__main__container">
            <LinkedLindStickyHeader />
            <div className="homepage__main__container">
                <div className="sideBar__left__container" >
                    <div className="banner__sidebar">
                        <div className="Profile__div__ctainer__for__show">
                            <div className="profile__description">
                                <div className="image__container__for__backgorund"><img src="https://media-exp1.licdn.com/dms/image/C5616AQElDlNPv1Ul-g/profile-displaybackgroundimage-shrink_200_800/0/1633931380459?e=1642636800&v=beta&t=ZB-aT6ZyRvVEltB8fy485JRt3AhT2K28YKJa60tHKaE" atl="" /> </div>
                                <div className="avater__container__backgroiund__style"> <Avatar sx={{ width: 65, height: 65 }} className="avater__for" src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_200_200/0/1633930955782?e=1639299600&v=beta&t=PWdlhR84f89KKymMQB_qFN-7eGQXPKTw40YXKGTfHSo" alt="" /></div>
                                <div className="person__name__container"><p>MD Mahfuz Rana</p></div>
                                <div className="Position__and__skills__container"><p>MERN Stack DEVELOPER</p></div>
                            </div>
                            <div className="person__statistics__container displayNOene">
                                <div className="small__letter__container">
                                    <div><dvi>Connections</dvi><div className="letter__and__number__color">42</div></div>
                                    <div className="margin__bottom">Grow Your NetWork</div>
                                    <div><dvi>Who Viwed your Profile</dvi><div className="letter__and__number__color" >52</div></div>
                                </div>
                            </div>
                            <div className="linkedIn__offer__container displayNOene">
                                <p>Access exclusive tools & insights</p>
                                <div> Try Primium for free</div>
                            </div>
                            <div className="linkedIn__offer__container__bottom__last displayNOene">
                                <div>😍 Try Primium for free</div>
                            </div>
                        </div>
                    </div>
                    <div className="hiding__smamlier__cotainer">
                        <div className="Profile__div__ctainer__for__show">
                            <div className="Recents__container">
                                <div><p>Recents</p></div>
                                <div className="activity__container">
                                    <div className="flex__box__container">
                                        <div>Logo</div>
                                        <div>Vacancy Announcement in BD</div>
                                    </div>
                                    <div className="flex__box__container">
                                        <div>Logo</div>
                                        <div>Vacancy Announcement in BD</div>
                                    </div>
                                </div>
                                <div><p>GRow</p></div>
                                <div className="activity__container">
                                    <div className="flex__box__container">
                                        <div>Logo</div>
                                        <div>Vacancy Announcement in BD</div>
                                    </div>
                                    <div className="flex__box__container">
                                        <div>Logo</div>
                                        <div>Vacancy Announcement in BD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar__middle__container">
                    {/* <PostMain /> */}
                    <div className="post__controller__header">
                        <div onClick={(e)=>{
                                dispatch({
                                type:actionTypes.SET__PERMIT__AND__INFO,
                                permitInfo:"true"
                                })}}>
                            <InputField />
                        </div>
                    </div>
                    <div className="post__container__post">
                    <InfiniteScroll
                            dataLength={postsLenth} //This is important field to render the next data
                            next={fecthData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                                </p>
                            }
                            // below props only if you need pull down functionality
                            refreshFunction={refresh}
                            pullDownToRefresh
                            pullDownToRefreshThreshold={50}
                            pullDownToRefreshContent={
                                <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                            }
                            releaseToRefreshContent={
                                <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                            }
                            >
                        {posts?.map(post=>(
                            <PostMain key={post._id} id={post._id} like={post.Like} userName={post.userName} avatar={post.avatar} file={post.file} time={"12:00"} />
                        ))
                            
                        }
                    </InfiniteScroll>
                    </div>

{permitedToOpenModal?   
             (<div className="fixedand__unbisible__container" >
                <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"top"}}>
                    <div className="input__second__cotianer">
                        {/* modal hert is starting from here modal  */}
                        <div className="inputField__main__container" >
                    <div className="dynamic__textInput__field__container" >
                        <div><Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_200_200/0/1633930955782?e=1639299600&v=beta&t=PWdlhR84f89KKymMQB_qFN-7eGQXPKTw40YXKGTfHSo" /></div>
                        <div className="text__container"><div><input type="text" placeholder="Write something Today" onChange={(e)=>{settext(e.target.value)}} /></div></div>
                        </div> 
                        <div className="dynamic__fileInput__field__container">
                            <label htmlFor="file"><div><div className="input__image__container"><img src="/logos/8.png" /></div><p>Photo</p></div></label>
                            <label htmlFor="video"><div><div className="input__image__container"><img src="/logos/9.png" /></div><p>Video</p></div></label>
                            <div><div className="input__image__container"><img src="/logos/10.png" /></div><p>Event</p></div>
                            <div><div className="input__image__container"><img src="/logos/11.png" /></div><p>Write Articale</p></div>
                            <input type="file" accept="image/*" onChange={(e)=>{setimage(e.target.files[0]) 
                                setfile(e.target.files[0])}} id="file" className="hidden" style={{display:"none"}} />
                            <input type="file" accept="video/*" onChange={(e)=>{setvideo(e.target.files[0]) 
                                setfile(e.target.files[0])}} id="video" className="hidden" style={{display:"none"}} />
                        </div>
                     </div>
                        {/* modal hert is starting from here modal  */}
                        <div className="text__only__filed">
                            <p>{text}</p>
                        </div>
                        <div className="imge__cotaierAndPreparing__for__post">
                    {image? (<div className="posting__div"> {image && <img src={URL.createObjectURL(image)} />}</div>):
                           ( <div className="posting__div">{video && <video width="100%" controls><source src={URL.createObjectURL(video)}/></video>}</div>)
                            }
                        </div>
                        {/* {video && <video width="100%" controls><source src={URL.createObjectURL(video)}/></video>} */}
                    <div style={{height:"100px",width:"100%", display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px"}} className="submit__post__contiainer">
                        <div onClick={closeModal}  style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",backgroundColor:"red" }}><p>Cencel</p></div>
                        <div onClick={submitPost} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",backgroundColor:"blue"}}><p>Submit</p></div>
                    </div>

                    </div>
                </div>
            </div>)
            :
            (<></>)
            }
                </div>
                <div className="sidebar__right__container">
                    <Sidebar__container />
                </div>
                <div className="floating__message__cotainer__and__hidden">
{readyToChat?      (<div className="floating__massage__box__box">
                        <ChatBox />
                    </div>):
                    (<></>)
                    }
{clickedMessageHeader? (<div className="floating__massage__box">
                        <ChatUserList />
                    </div>):
                    (<></>)
                    }
                </div>
            </div>
        </div>
    )
}

export default LinkedInHomePage
