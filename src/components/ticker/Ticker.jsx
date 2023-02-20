import React from 'react'
import Marquee from "react-fast-marquee";

import './ticker.scss'

function Ticker() {
  return (
    <Marquee
        gradient={false}
        style={{
            padding: '11px 0',
            color: '#FFF500',
            fontSize: '13px',
            backgroundColor: '#5A4039',
            textTransform: 'uppercase'
        }}
    >
        WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp; WARNING: this is not a meme coin &nbsp;&nbsp;&nbsp;
    </Marquee>
  )
}

export default Ticker