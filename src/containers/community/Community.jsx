import React, { useState } from 'react'
import Title from '../../components/title/Title'
import CatImage from '../../components/catImage/CatImage'

import mapImage from '../../../src/assets/images/community/community-bgc.png'
import telegramIcon from '../../../src/assets/images/community/telegram.svg'
import facebookIcon from '../../../src/assets/images/community/facebook.svg'
import letterMIcon from '../../../src/assets/images/community/letterM.svg'
import instagramIcon from '../../../src/assets/images/community/instagram.svg'
import twitterIcon from '../../../src/assets/images/community/twitter.svg'
import robotIcon from '../../../src/assets/images/community/robot.svg'

import './community.scss'

const socialIconsArr = [
  {
    id: 1,
    image: telegramIcon,
    link: 'https://telegram.org/'
  },
  {
    id: 2,
    image: twitterIcon,
    link: 'https://twitter.com/login'
  },
  {
    id: 3,
    image: robotIcon,
    link: 'https://mail.google.com/mail/u/0/#inbox'
  },
  {
    id: 4,
    image: facebookIcon,
    link: 'https://www.facebook.com/'
  },
  {
    id: 5,
    image: letterMIcon,
    link: 'https://mail.google.com/mail/u/0/#inbox'
  },
  {
    id: 6,
    image: instagramIcon,
    link: 'https://www.instagram.com/'
  },
]

function Community() {
  const [ visible, setVisible ] = useState(false)
  const contactAdress = '0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc'

  return (
    <section className='community-section' id='community'>
        <div className="container">
            <div className="community-content">
              <Title 
                children='Join our SpiderShib Inu Community' 
                align='center'
                marginBottom='50px'
              />
              <img src={mapImage} alt="" className='community-background-image'/>
              <ul className="community-list-icons">
                {socialIconsArr.map(icon => {
                  return (
                    <li className="community-item" key={icon.id}>
                      <a href={icon.link} className="community-item-link">
                        <img 
                          src={icon.image} 
                          alt="" 
                          className="community-item-icon"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
              <div className="community-cat-wrapper">
                <CatImage desktopWidth="256px" mobileWidth="256px" />
              </div>
              <div className='hero-copy-board' 
                    onClick={() => {
                      navigator.clipboard.writeText(contactAdress)
                      setVisible(true)

                      setTimeout(() => {
                        setVisible(false)
                      }, 2000)
                    }}
                  >
                  <small className='copy-board-title'>Contract address: &nbsp; &nbsp;</small>
                  <span className= {`copy-board-message ${visible && 'active'} `}>copied</span>
                  <span className='copy-board-address'>{contactAdress}</span>
              </div>
            </div>
        </div>
        <div className="copyright">
          <span className="copyright-text">Copyright © 2021 SpiderShiba Inu. All Rights Reserved.</span>
        </div>
    </section>
  )
}

export default Community