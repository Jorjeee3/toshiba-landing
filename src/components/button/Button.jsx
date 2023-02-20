import React from 'react'

import './button.scss'

function Button({ children, type, width }) {
  return (
    <button style={{ maxWidth: `${width}` }} className={`button button-${type}`}>
        <span className='button-text'>{children}</span>
    </button>
  )
}

export default Button