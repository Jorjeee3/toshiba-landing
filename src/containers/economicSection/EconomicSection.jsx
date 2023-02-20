import React from 'react'
import Economic from '../economic/Economic'
import Title from '../../components/title/Title';
import CatImage from '../../components/catImage/CatImage';

import './economicSection.scss'

const economic = [
    {
        id: 1,
        title: '19% on marketing',
    },
    {
        id: 2,
        title: '5% for founders, 6% stacked',
    },
    {
        id: 3,
        title: '30% for liquidity',
    },
    {
        id: 4,
        title: '10% for advisors',
    },
    {
        id: 5,
        title: 'P2e 15%',
    },
    {
        id: 6,
        title: 'NFT 15%',
    }
]

function EconomicSection() {
  return (
    <section className="economic-section">
        <div className="container">
            <div className='economic-circle-wrapper'>
                    <Title 
                        children='Tokenomics'
                        align='center'
                        marginBottom='50px'
                    />
                <div className="economic-content">
                    <ul className="economic-list">
                        {/* eslint-disable-next-line */}
                        {economic.map(elem => {
                            if (elem.id < 4) {
                                return (
                                    <li className="economic-item" key={elem.id}>
                                        <span className='economic-title'>{elem.title}</span>
                                        <p className='economic-text'>
                                            Thanks to our ecosystem you will be able to earn passively and actively
                                        </p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    <div className="economic-circle" style={{ position: 'relative' }} >
                        <Economic endPoint='19' rotate='-90' color='#4E00FF' />
                        <Economic endPoint='5' rotate='-21.6' color='#FF850B' />
                        <Economic endPoint='30' rotate='-3.6' color='#1DBEE1' />
                        <Economic endPoint='10' rotate='104.4' color='#133D81' />
                        <Economic endPoint='15' rotate='140.4' color='#FF0000' />
                        <Economic endPoint='6' rotate='194.4' color='#663090' />
                        <Economic endPoint='15' rotate='216' color='#0096F2' />
                        <div className="economic-cat-wrapper">
                            <CatImage desktopWidth="100%" mobileWidth="100%" />
                        </div>
                    </div>
                    <ul className="economic-list">
                        {/* eslint-disable-next-line */}
                        {economic.map((elem) => {
                            if (elem.id > 3) {
                                return (
                                    <li className="economic-item" key={elem.id}>
                                        <span className='economic-title'>{elem.title}</span>
                                        <p className='economic-text'>
                                            Thanks to our ecosystem you will be able to earn passively and actively
                                        </p>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
  </section>
  )
}

export default EconomicSection