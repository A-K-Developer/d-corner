import React from 'react';
import { whiteLogo } from '../utils/constants'
import './style.css';

const Footer = () => (
    <div className='footer'>

        <div className="leftFooter">
            <img src={whiteLogo} alt="logo" />
            <p>Copenhagen, Denmark</p>
            <p>+45 20 73 03 20</p>
            <p>designdevcorner@gmail.com</p>
            <div className="socialIcons">
                <img src="../utils/facebook.png" alt="facebook" />
                <img src="../utils/instagram.png" alt="instagram" />
            </div>
        </div>
        <div className="rightFooter">
            <h3>Join the D&D Corner community!</h3>
            <p>Some inspiring copy that tells the user about why they need to subscribe to this newsletter</p>
            <div className="subscribeBox">
                <p>Your email</p>
                <input type="text" placeholder='email' />
                <button className= "btn footer-btn">Subscribe</button>
            </div>

        </div>

    </div>


)
export default Footer