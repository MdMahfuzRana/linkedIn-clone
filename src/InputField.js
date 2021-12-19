import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './InputField.css'
import PhotoIcon from '@material-ui/icons/Photo';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function InputField() {
    return (
        <div className="inputField__main__container" >
           <div className="dynamic__textInput__field__container" >
               <div><Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQEHBSLzovfVBw/profile-framedphoto-shrink_200_200/0/1633930955782?e=1639299600&v=beta&t=PWdlhR84f89KKymMQB_qFN-7eGQXPKTw40YXKGTfHSo" /></div>
               {/* <div className="text__container"><div><input type="text" placeholder="Write something Today" /></div></div> */}
               <div className="text__container"><div><p>Write something today</p></div></div>
            </div> 
            <div className="dynamic__fileInput__field__container">
                <div><div className="input__image__container"><img src="/logos/8.png" /></div><p>Photo</p></div>
                <div><div className="input__image__container"><img src="/logos/9.png" /></div><p>Video</p></div>
                <div><div className="input__image__container"><img src="/logos/10.png" /></div><p>Event</p></div>
                <div><div className="input__image__container"><img src="/logos/11.png" /></div><p>Write Articale</p></div>
            </div>
        </div>
    )
}

export default InputField
