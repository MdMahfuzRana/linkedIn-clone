import React from 'react'
import './ChatUserList.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Avatar } from '@mui/material';
function ChatUserList() {
    return (
        <div className="">
            <div className="list__header">
                <div><p>Messaging</p></div>
                <div className="header__icon">
                    <div><MoreHorizIcon /></div>
                    <div><BorderColorIcon /></div>
                </div>
            </div>
            <div className="people__search__container">
                <div >
                    <SearchIcon />
                    <input type="text" placeholder="Search Messages effective__animations" />
                    <TimelineIcon />
                </div>
            </div>
            <div className="people__contiainer">
                <div className="people__box">
                    <div><Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQENKJ0qK2R8kg/profile-displayphoto-shrink_100_100/0/1634692767926?e=1644451200&v=beta&t=hE4Hv_BIi8IJEVXLOTRS1vO9gS7HDoKIeJUU5H5n8ZM" style={{height:"55px",width:"55px"}} /></div>
                    <div className="chat__lasst__history">
                        <div className="time__and__name__header"><div>MD Mahfuz</div><div>Time</div></div>
                        <div>this is the last message</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatUserList
