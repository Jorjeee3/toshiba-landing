import React from 'react'
import styled from 'styled-components'

import arrowIcon from '../../assets/images/iconcompopent/arrow.png'
import squareIcon from '../../assets/images/iconcompopent/square.png'
import shapesIcon from '../../assets/images/iconcompopent/shapes.png'

import './icon.scss'

function Icon({ icon, shape, color }) {

const IconWrapper = styled.div`
    position: relative;
    z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    width: 80px;
    height: 80px;
    opacity: 0.3;
    background-color: ${color};

    @media (min-width: 768px) {
        width: 120px;
        height: 120px;
    }
  }
`

  if ( icon === 'arrow' ) {
    return (
        <IconWrapper className={`icon-background ${shape}`} style={{ backgroundColor: `${color}` }}>
            {/* <div className='icon-color' style={{ backgroundColor: `${color}` }}> */}
                <img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className={`icon-${shape}`}
                />
            {/* </div> */}
        </IconWrapper>
    )
  } else if ( icon === 'square' ) {
    return (
        <IconWrapper className={`icon-background ${shape}`} style={{ backgroundColor: `${color}` }}>
            {/* <div className='icon-color' style={{ backgroundColor: `${color}` }}> */}
                <img 
                    src={squareIcon} 
                    alt="square"
                    className={`icon-${shape}`}
                />
            {/* </div> */}
        </IconWrapper>
    )
  } else {
    return (
        <IconWrapper className={`icon-background ${shape}`} style={{ backgroundColor: `${color}` }}>
            {/* <div className='icon-color' style={{ backgroundColor: `${color}` }}> */}
                <img 
                    src={shapesIcon} 
                    alt="shapes" 
                    className={`icon-${shape}`}
                />
            {/* </div> */}
        </IconWrapper>
    )
  }
}



export default Icon