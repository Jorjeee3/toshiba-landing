import React from 'react'

import Title from '../../components/title/Title'
import ListOfCompanies from '../../components/listOfCompanies/ListOfCompanies'

import './partnersInvestors.scss'

function PartnersInvestors() {
  return (
    <div className='section-partners' id='partners'>
        <Title 
            children='Partners & Investors'
            align='center'
            marginBottom='50px'
        />
        <ListOfCompanies 
            size='large'
        />
    </div>
  )
}

export default PartnersInvestors