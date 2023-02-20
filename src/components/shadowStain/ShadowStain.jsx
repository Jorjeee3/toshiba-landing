import React from 'react'

import './shadowStain.scss'

function ShadowStain({ fromTop, fromLeft }) {
  return (
    <div 
        className='stain' 
        style={{
            top: fromTop,
            left: fromLeft
        }}
    ></div>
  )
}

export default ShadowStain