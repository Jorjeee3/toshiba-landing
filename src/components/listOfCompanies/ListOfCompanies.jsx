import React from 'react'

import pinkSale from '../../assets/images/componiesLogos/pinkSale.png'
import interFi from '../../assets/images/componiesLogos/interFi.png'
import sandbox from '../../assets/images/componiesLogos/sandbox.png'
import tecentraland from '../../assets/images/componiesLogos/tecentraland.png'
import CoinGesko from '../../assets/images/componiesLogos/CoinGesko.png'
import CoinMarketCap from '../../assets/images/componiesLogos/CoinMarketCap.png'

import './listOfCompanies.scss'

const companiesList = [
    {
        id: 1,
        name: 'pink sale',
        image: pinkSale,
        link: 'https://www.pinksale.finance/'
    },
    {
        id: 2,
        name: 'inter fi',
        image: interFi,
        link: 'https://www.interfi.network/'
    },
    {
        id: 3,
        name: 'sandbox',
        image: sandbox,
        link: 'https://www.sandbox.game/en/'
    },
    {
        id: 4,
        name: 'decentraland',
        image: tecentraland,
        link: 'https://decentraland.org/'
    },
    {
        id: 5,
        name: 'coin gesko',
        image: CoinGesko,
        link: 'https://www.coingecko.com'
    },
    {
        id: 6,
        name: 'coin market cap',
        image: CoinMarketCap,
        link: 'https://coinmarketcap.com/'
    }
]

function ListOfCompanies({ size }) {
  return (
    <ul className={`companies-list ${size === 'large' ? 'large' : 'small'} `} >
        {companiesList.map(company => {
            return (
                <li className='company-item' key={company.name}>
                    <a href={company.link} className='company-link' target='_blank' rel="noreferrer">
                        <img 
                            src={company.image}
                            alt={company.name}
                            className='company-logo'
                        />
                    </a>
                </li>
            )
        })}
    </ul>
  )
}

export default ListOfCompanies