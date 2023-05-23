import React from 'react';
import logo from './../../assets/Mkunai.png'
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav-container">
            {/* Nav left */}
            <div className="nav-left">
                <img className='flash-logo' src={logo} alt="logo" />
                <p className='flash-logo-text'>YellowFlash</p>
            </div>
            
            {/* Nav right */}
            <div className="nav-right">
                <a 
                    target='_blank'
                    className="nav-aam-link"
                    href="http://theleanprogrammer.com/aam"
                    rel="noreferrer">
                        AAM
                </a>
            </div>
        </div>
    )
}

export default Nav;