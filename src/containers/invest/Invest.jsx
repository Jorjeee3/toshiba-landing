import React from 'react'
import Button from '../../components/button/Button'
import { AiFillStar } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';

import webImage from  '../../assets/images/invest-images/Vector-min.png'

import './invest.scss'

function Invest() {
  return (
    <section className='section-invest' id='invest'>
                    <img 
                        src={webImage} 
                        alt="web"
                        className='invest-webImage' 
                    />
        <div className="container">
            <div className="invest-content">
                <div className="invest-text-block">
                    <h2 className="invest-title">
                        Why invest in SpiderShiba Inu?
                    </h2>
                    <p className='invest-text'>
                        in case you have lived in a cave in the last few months 
                        we will give you a brief summary of what happened in crypto industry
                    </p>
                    <Button type='primary' children='Learn more about SpiderShiba' />
                </div>
                <ul className="invest-list">
                    <li className="invest-item">
                        <div className="invest-icon-wrapper">
                            <BsArrowUpRight className='invest-item-icon' />
                        </div>
                        <div className='invest-text-wrapper'>
                            <h4 className="invest-item-title">
                                Massive trend
                            </h4>
                            <p className='invest-item-text'>
                                Shiba inu has invaded the market with an infinity 
                                of other meme coins that collect thousands of BNB 
                                and after the launch they make mind-boggling numbers! 
                            </p>
                        </div>
                    </li>

                    <li className="invest-item">
                        <div className="invest-icon-wrapper">
                            <AiFillStar className='invest-item-icon' />
                        </div>
                        <div className='invest-text-wrapper'>
                            <h4 className="invest-item-title">
                                100% of value, 0% of memecoin!
                            </h4>
                            <p className='invest-item-text'>
                                We took the best from this trend and have
                                decided to ride this tremendous wave success 
                                in Shiba Inu tokens, not only by launching a 
                                coin, but by creating a real NFT game p2e
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Invest