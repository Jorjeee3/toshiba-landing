import React from 'react'

import networkImage from '../../assets/images/earth/earth.png'
import ListOfCompanies from '../../components/listOfCompanies/ListOfCompanies'
import CatImage from '../../components/catImage/CatImage'
import Button from '../../components/button/Button'
import './worldNetwork.scss'

function WorldNetwork() {
  return (
    <section className='world-network'>
        <div className="container">
            <div className="network-content">
                <div className="network-list">
                  <ListOfCompanies  />
                </div>
                <div className="network-title-content">
                  <img 
                    src={networkImage} 
                    alt="network" 
                    className='network-image'
                  />
                  <h2 className='network-title'>Yes you read that right, SpiderShib Inu officially enters the game to conquer the world 🌎</h2>
                  <div className="cat-image-wrapper">
                    <CatImage desktopWidth='193px' mobileWidth='70px' />
                  </div>
                  <div className="network-button-desktop">
                    <Button type='primary' children='Let’s find out more' />
                  </div>
                </div>
                <div className="network-button-mobile">
                    <Button width='260px' type='primary' children='Let’s find out more' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorldNetwork