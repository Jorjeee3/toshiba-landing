import React from 'react'

import Title from '../../components/title/Title'

import playtoearn from '../../assets/images/playToEarn/play-to-earn.png'
import coin from '../../assets/images/playToEarn/coin.png'
import megaphone from '../../assets/images/playToEarn/megaphone.png'

import './playToEarn.scss'

const playToEarnArray = [
    {
        id: 1,
        image: playtoearn,
        title: 'Game plot and goal',
        backgroundColor: '#071022',
        text: [
            "Mary Jane has been kidnapped by Green Goblin, who has no intention of letting her escape, so she flees to New York City, going through different scenarios that will be part of the game!",

            "The goal is to accumulate as many game coins and points as possible, which will then be transformed into the game token based also on the attempts used to complete the level.",
            
            "Once the Green Goblin is defeated and Mary Jane is safed, the game is over, but we don't stop there!"
        ]
    },
    {
        id: 2,
        image: coin,
        title: 'Earn that cash!',
        backgroundColor: '#FF9429',
        text: 'In the various levels there will also be special coins, more difficult to take, which will provide you with bonuses in tokens or game NFTs!'
    },
    {
        id: 3,
        image: megaphone,
        title: 'Game events and challenges',
        backgroundColor: '#067CCB',
        text: 'There will be lots of events after end of the game, that will bring together whole community and you can participate in challanges with the NFTs!'
    },
]

function PlayToEarn() {
  return (
    <div className='section-play-to-earn' id='play'>
        <div className="container">
            <div className="play-content">
                <Title 
                    children='Play to earn'
                    align='center'
                    marginBottom='10px'
                />
                <span className="play-subtitle">
                    Many ways to earn tokens and NFTs
                </span>
                <ul className="play-list">
                    {playToEarnArray.map(item => {
                        return (
                            <li className="play-item" key={item.id} style={{ backgroundColor: `${item.backgroundColor}` }}>
                                <div className="play-image-wrapper">
                                    <img 
                                        src={item.image} 
                                        alt="" 
                                        className='play-image'
                                    />
                                </div>
                                <div className="play-text-wrapper">
                                    <h4 className="play-item-title">{item.title}</h4>
                                    { Array.isArray(item.text) ?
                                        item.text.map(elem => {
                                            return (
                                                <p className="play-item-text">{elem}</p>
                                            )
                                        })
                                    :
                                    <p className="play-item-text">{item.text}</p>
                                    }
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PlayToEarn