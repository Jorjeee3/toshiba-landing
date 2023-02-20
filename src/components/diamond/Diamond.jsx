import React from 'react'

import './diamond.scss'

function Diamond({
     color, 
     width, 
     height, 
     rotate,
     fromTop,
     fromLeft
    }) {
  return (
    <svg style={{ 
        transform: `rotate(78deg)`,
        top: fromTop,
        left: fromLeft
    }} 
    width={width} 
    height={height} 
    viewBox="0 0 101 115" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className='dimond'
    >
        <path opacity="0.3" d="M22.1996 0C22.1996 0 31.386 39.5822 0.928223 
        83.7752C0.928223 83.7752 50.6881 82.2521 74.6188 115C74.6188 
        115 66.6416 67.4007 100.828 31.2258C100.828 31.2258 54.1066
         39.603 22.1996 0Z" fill={color}
        />
    </svg>
  )
}

export default Diamond