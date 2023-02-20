import React from 'react'
import Title from '../../components/title/Title'
import Icon from '../../components/icon/Icon'

import './howItWorks.scss'

function HowItWorks() {
  return (
    <section className='section-how-it-works' id='things'>
        <div className="container">
            <div className="how-it-content">
                <Title 
                    children='How it works?'
                    align='center'
                    marginBottom='50px'
                 />
                <ul className='explanation-list'>
                    <li className="explanation-item">
                        <Icon 
                            icon='shapes' 
                            shape='square' 
                            color='#E11D2E' 
                        />
                        <h4 className="explanation-title">SpiderShib Inu Ecosystem</h4>
                        <span className="explanation-subtitle">
                            Large variety of options to use SpiderShib Inu tokens and NFTs
                        </span>
                        <p className="explanation-text">
                            Our ecosystem is different from all the others, we have created the first REAL nft game with SpiderShib Inu.
                            So the tokens will have real usefulness and to ensure constant growth for all holders.
                        </p>
                    </li>

                    <li className="explanation-item">
                        <Icon 
                            icon='square' 
                            shape='square' 
                            color='#FF9429' 
                        />
                        <h4 className="explanation-title">Many options to earn</h4>
                        <span className="explanation-subtitle">
                            Thanks to our ecosystem you will be able to earn passively and actively
                        </span>
                        <p className="explanation-text">
                            The passive income:
                            - staking
                            - the appreciation of the staked currency
                            <br />
                            <br />
                            The active income:
                            - Gaming process (you will earn money that you can turn into tokens)
                            - Re-sale of the NFTs
                        </p>
                    </li>

                    <li className="explanation-item">
                        <Icon 
                            icon='arrow' 
                            shape='square' 
                            color='#0096F2' 
                        />
                        <h4 className="explanation-title">Reshaping DeFi</h4>
                        <span className="explanation-subtitle">
                            We are evolving DeFi concepts such as participation rewards, NFTs and tokenomics to maximise profit for every investor
                        </span>
                        <p className="explanation-text">
                            We offer huge tools for people around the world to take control of their financial future.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks