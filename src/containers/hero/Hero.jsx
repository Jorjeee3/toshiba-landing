import React, { useState } from 'react'
import CatImage from '../../components/catImage/CatImage'
import Button from '../../components/button/Button'
import Ticker from '../../components/ticker/Ticker'
import ShadowStain from '../../components/shadowStain/ShadowStain'
import Diamond from '../../components/diamond/Diamond'

import './hero.scss'

function Hero() {
  const [ visible, setVisible ] = useState(false)
  const contactAdress = '0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc'

  return (
    <section className='hero-section'>
        <div className="container">
          <div className="hero-content">
              <div className="hero-text-content">
                <h1 className='hero-title'><span>Who is </span>
                mr. Spidershiba Inu?</h1>
                <span className='hero-subtitle'>it’s a hybrid of Shiba and Spiderman.... but </span>
                <p className='hero-text'>
                    It’s not only for pump and dump by Elon tweets. 
                    This is real NFT game with Achiements, Goals and nice gameplay with tokenization
                </p>
                <div className="cat-image-wrapper">
                  <CatImage desktopWidth="500px" mobileWidth="200px"/>
                </div>

                <div className="hero-buttons-wrapper">
                  <Button width='295px' type='primary' children='Join Community' />
                  <Button width='387px' type='secondary' children='More about SpiderShiba Inu' />
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

              <div className="cat-image-wrapper">
                <CatImage desktopWidth="500px" mobileWidth="200px"/>
                <ShadowStain fromTop='50%' fromLeft='70%' />
                <Diamond 
                  color='#E11D2E' 
                  width='100px' 
                  height='115px' 
                  rotate='495' 
                  fromTop='30%'
                  fromLeft='-5%'
                />
                <Diamond 
                  color='#FF850B' 
                  width='66px' 
                  height='76px' 
                  rotate='25' 
                  fromTop='10%'
                  fromLeft='80%'
                />
                <Diamond 
                  color='#0096F2' 
                  width='110px' 
                  height='120px' 
                  rotate='0' 
                  fromTop='70%'
                  fromLeft='90%'
                />
              </div>
          </div>
        </div>
        <div className="ticker-wrapper">
          <Ticker />
        </div>
        <ShadowStain fromTop='5%' fromLeft='-5%' />
        <ShadowStain fromTop='60%' fromLeft='2%' />
    </section>
  )
}

export default Hero