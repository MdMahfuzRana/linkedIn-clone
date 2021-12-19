import React from 'react'
import './Sidebar__container.css'
import InfoIcon from '@material-ui/icons/Info';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Avatar } from '@mui/material';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Accessibility } from '@material-ui/icons';

function Sidebar__container() {
    return (
        <div className="sidebar__main__container__insight">
            <div className="sidebar__follower__suggest">
                <div className="follower__suggest__header">
                    <div>Add to your feed</div>
                    <div><AcUnitIcon /></div>
                </div>
                <div className="user__container__follower">
                    <div className="folower__div">
                        <div className="follower__avater">
                            <Avatar />
                        </div>
                        <div className="follower__desc">
                            <div><h4>Md mahfuz</h4></div>
                            <div><p>SR. MERN stack DEVELOPER</p></div>
                            <div className="follower__button__contianer"><div>+Follow</div></div>
                        </div>
                    </div>   
                    <div className="folower__div">
                        <div className="follower__avater">
                            <Avatar />
                        </div>
                        <div className="follower__desc">
                            <div><h4>Md mahfuz</h4></div>
                            <div><p>SR. MERN stack DEVELOPER</p></div>
                            <div className="follower__button__contianer"><div>+Follow</div></div>
                        </div>
                    </div>  
                    <div className="folower__div">
                        <div className="follower__avater">
                            <Avatar />
                        </div>
                        <div className="follower__desc">
                            <div><h4>Md mahfuz</h4></div>
                            <div><p>SR. MERN stack DEVELOPER</p></div>
                            <div className="follower__button__contianer"><div>+Follow</div></div>
                        </div>
                    </div> 
                </div>
                <div className="follower__suggest__bootom">
                    <div className="speacila">
                    <div > View all recomendations</div>
                    <div className="special"><ArrowRightAltIcon /></div>
                    </div>
                </div>
            </div>

            <div className="linked__sideimage__container">
                <div className="image__container">
                    <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" />
                </div>
            </div>

            <div className="footer__container__main">
                <div className="acnchor__container">
                    <a>about</a>
                    <a>Accessibility</a>
                    <a>Help center</a>
                    <a>Terms and Privacy</a>
                    <a>Ad Choices</a>
                    <a>Advertising</a>
                    <a>Buissness Services</a>
                    <a>Get the linkedin App</a>
                    <a>more</a>
                </div>
                <div className="lincesnse__container">
                    <p>linkedIn Corporation © 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar__container
