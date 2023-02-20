import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Title from '../../components/title/Title';

import './faq.scss'

const faqArray = [
    {
        id: 1,
        question: "What are Shiba Inu's key features?",
        answer: "So other than being another doggy-themed cryptocurrency, what is shiba inu coin all about? The first notable thing about the shiba inu coin is its total supply. A fixed total supply of 1 quadrillion SHIB tokens was minted during the project’s official launch in 2020. A quadrillion is a number followed by 15 zeros. Some 50% of the supply of shiba inu was locked in Uniswap SHIB/ETH liquidity pool – a decentralized exchange where users deposit pairs of assets into liquidity pools that other investors can trade against. That is known as an automated market maker system."
    },
    {
        id: 2,
        question: "What is ShibaSwap?",
        answer: "Shibaswap is a decentralized exchange – a type of peer-to-peer trading platform similar to Uniswap that allows users to trade SHIB and other cryptocurrencies without an intermediary company. It also allows users to provide liquidity (deposit funds into pools that other traders can use to trade against) and stake tokens (deposit them into a smart contract) to earn interest using SHIB token and two additional ERC-20 tokens that exist within the Shiba ecosystem; Bone ShibaSwap token (BONE) and Doge Killer token (LEASH)."
    },
    {
        id: 3,
        question: "Who created SHIB coin?",
        answer: "Shiba inu coin launched in August 2020 as a direct competitor to Dogecoin. But unlike Dogecoin, the mysterious creator(s) of Shiba Inu, known as Ryoshi, made some design decisions that have since set the token apart. According to Ryoshi, SHIB has “the ability to outpace the value of dogecoin, exponentially, without ever crossing the $0.01 mark.” To put that into perspective, SHIB was trading for $0.000025 at press time, which is a long way from $0.01. And yet, its market cap has already reached a third of Dogecoin’s market cap."
    },
    {
        id: 4,
        question: "The Elon Musk effect",
        answer: "The launch of Shiba Inu failed to gain traction at the beginning, but it began to make a splash around the same time Tesla CEO Elon Musk and other prominent individuals started to take interest in Dogecoin. Tech billionaire Musk in particular has been one of the most vocal supporters of Dogecoin. Dubbed the “Dogefather,” Musk was even voted as the project’s new unofficial CEO."
    },
]

function FQA() {
    const [ active, setActive] = useState(0)

    const toggleFAQ = (event, index) => {
        if (active !== index) {
            setActive(index)
        } else {
            setActive(null)
        }
    }

  return (
    <section className='section-faq' id='faq'>
        <div className="container">
            <div className="faq-content">
                <Title 
                    children='Frequently Asked Questions'
                    align='center'
                    marginBottom='50px'
                 />
                <ul className="faq-list">
                    {faqArray.map((item, index) => {
                        return (
                            <li className="faq-item" key={item.id} onClick={(event) => toggleFAQ(event, index)} >
                                <div className="faq-question-block">
                                    <span className='faq-question'>{item.question}</span>
                                    <div className='faq-icon-wrapper'>
                                        <IoIosArrowDown className={`faq-arrow-icon ${ index === active ? 'active' : ''}`} />
                                    </div>
                                </div>
                                <div className={`faq-answer-block ${ index === active ? 'active' : ''}`} >
                                    <p className='faq-answer'>{item.answer}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default FQA