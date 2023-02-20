import React, { useRef, useState } from 'react'
import logo from '../../../src/assets/images/logo.png'
import Button from '../button/Button'

import './header.scss'

function Header(props) {
    const [ activeBurger, setActiveBurger ] = useState(false)
    let burgerInput = useRef()

    function setStateToButton() {
        if (props.active === false) {
            burgerInput.current.checked = true
        } else {
            burgerInput.current.checked = false
        }
    }

    function handleChange(event) {
        props.click(event.target.value)
        setActiveBurger(!activeBurger)
    }

  return (
    <header className="header">
        <div className="header-content">
            <div className="header-logo">
                <img src={logo} alt="" className='logo-image'/>
                <span className='logo-text'>SpiderShiba
                    <span> Inu</span>
                </span>
            </div>
            <div className="burger-button">
                <div onClick={handleChange} className={`burger-button-wrapper ${activeBurger ? 'active' : '' } `} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={`header-navigation ${props.active ? 'active' : '' }`}>
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <a 
                        onClick={setStateToButton}
                        href="/" 
                        onChange={handleChange} 
                        className="navigation-link">How it works</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#play"
                        onClick={handleChange}
                        className="navigation-link">Play and earn</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="/"
                        onClick={handleChange}
                        className="navigation-link">Roadmap</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#team"
                        onClick={handleChange}
                        className="navigation-link">Team</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#partners"
                        onClick={handleChange}
                        className="navigation-link">Partners & Investors</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#invest"
                        onClick={handleChange}
                        className="navigation-link">Why invest in SpiderShiba</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#tokenomics"
                        onClick={handleChange}
                        className="navigation-link">Tokenomics</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#faq"
                        onClick={handleChange}
                        className="navigation-link">FAQ</a>
                    </li>
                    <li className="navigation-item">
                        <a 
                        href="#community"
                        onClick={handleChange}
                        className="navigation-link">Community</a>
                    </li>
                </ul>
                <Button 
                    type='tertiary' 
                    children='Join Community'
                    width='329px'
                />
            </nav>
        </div>
    </header>
  )
}

export default Header