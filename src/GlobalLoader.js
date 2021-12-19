import React from 'react'
import './GlobalLoader.css'

function GlobalLoader() {
    return (
        <div className="global__loader__main__container">
            <div className="loader__cotainer">
                <div className="progress__bar__logo__container"><img src="https://static-exp1.licdn.com/sc/h/8fkga714vy9b2wk5auqo5reeb" /></div>
                <div className="progress__bar__container"><div></div></div>
            </div>
        </div>
    )
}

export default GlobalLoader
