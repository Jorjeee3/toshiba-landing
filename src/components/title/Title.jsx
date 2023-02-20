import React from 'react'
import styled from 'styled-components'

import './title.scss'

function Title({ children, align, marginBottom }) {

const Title = styled.h2`
    text-align: ${align};
    margin-bottom: ${marginBottom}
`

  return (
    <Title className='secondary-title'>{children}</Title>
  )
}

export default Title