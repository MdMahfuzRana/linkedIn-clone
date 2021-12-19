import React from 'react'
import ChatBox from './ChatBox'
import ChatUserList from './ChatUserList'
import LinkedLindStickyHeader from './LinkedLindStickyHeader'
import './MessagePage.css'
import Sidebar__container from './Sidebar__container'

function MessagePage() {
    return (
        <div className="message__page__container">
            <div>
                <LinkedLindStickyHeader />
            </div>
            <div className="page_body__container">
                <div className="page__body__container__left">
                    <div className="chat__body__list__container">
                        <ChatUserList />
                    </div>
                    <div className="chat__body__chat__box" >
                        <ChatBox />    
                    </div>
                </div>
                <div  className="pagebody__container__right">
                    <Sidebar__container />
                </div>
            </div>
        </div>
    )
}

export default MessagePage
