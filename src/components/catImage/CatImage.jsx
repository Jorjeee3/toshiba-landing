import React from 'react'
import catImg from '../../assets/images/cat-image.png'

import './catImage.scss'

function CatImage({
    desktopWidth,
    mobileWidth
}) {
  return (
    <>
        <div className='cat-image-wrapper-desktop' style={{ maxWidth: `${desktopWidth}` }} >
            <img className='cat-image' src={catImg} alt="cat" />
        </div>
        <div className='cat-image-wrapper-mobile' style={{ maxWidth: `${mobileWidth}` }} >
            <img className='cat-image' src={catImg} alt="cat" />
        </div>
    </>
  )
}

export default CatImage