import { Avatar } from '@mui/material'
import React from 'react'
import LinkedLindStickyHeader from './LinkedLindStickyHeader'
import './NotificationPage.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Sidebar__container from './Sidebar__container';
function NotificationPage() {
    return (
        <div>
            <LinkedLindStickyHeader />
            <div className='notification__container__mian'>
                <div className='colum__left__container'>
                    <div style={{height:"60px",padding:"10px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div><p>Manage your Notification</p></div>
                        <div><p>Setting</p></div>
                    </div>
                </div>
                <div className='colum__midle__contaainer'>
                    <div className='notification___div'>
                        <div><Avatar /></div>
                        <div className='notificaton__paragraph__container'><p>This post is popular at Microsoft: The trust we build with our customers t</p></div>
                        <div><p>time</p><MoreHorizIcon /></div>
                    </div>
                    <div className='notification___div'>
                        <div><Avatar /></div>
                        <div className='notificaton__paragraph__container'><p>This post is popular at Microsoft: The trust we build with our customers t</p></div>
                        <div><p>time</p><MoreHorizIcon /></div>
                    </div>
                    <div className='notification___div'>
                        <div><Avatar /></div>
                        <div className='notificaton__paragraph__container'><p>This post is popular at Microsoft: The trust we build with our customers t</p></div>
                        <div><p>time</p><MoreHorizIcon /></div>
                    </div>
                    <div className='notification___div'>
                        <div><Avatar /></div>
                        <div className='notificaton__paragraph__container'><p>This post is popular at Microsoft: The trust we build with our customers t</p></div>
                        <div><p>time</p><MoreHorizIcon /></div>
                    </div>
                </div>
                <div className='notificatoin__right__contaainer'>
                    <Sidebar__container />
                </div>
            </div>
        </div>
    )
}

export default NotificationPage
