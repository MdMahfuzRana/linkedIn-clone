import React, { useState } from 'react'
import './CustomAlertPage.css'
import CancelIcon from '@mui/icons-material/Cancel';
function CustomAlertPage() {
    const [alert, setalert] = useState("displayNone")
    return (
        <div className={`CustomAlertPage__container ${alert}`}>
            <div className="alert__container" >
                <div>
                     <p>Invalid Something!!!</p>
                </div>
                <div className="hover">
                    <CancelIcon />
                </div>
            </div>
        </div>
    )
}

export default CustomAlertPage
