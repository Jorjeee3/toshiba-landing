import React, { useState, useEffect, useCallback } from 'react'

import './progressRing.scss'

function ProgressRing({ radius, stroke, progress, color }) {
    const [ strokeDashoffset, setStrokeDashoffset ] = useState(null)
    const [ ring, setRing ] = useState(false)

    const normalizedRadius = useCallback(() => {
        return radius - stroke * 2
    }, [radius, stroke]);

    const circumference = useCallback(() => {
        return normalizedRadius() * 2 * Math.PI;
    }, [normalizedRadius]);

    useEffect(() => {
        setStrokeDashoffset( circumference() - progress / 100 * circumference() )
        const interval = setInterval(() => {
            clearInterval(interval);
            setRing(true)
            }, 1000);
    }, [circumference, progress])

  return (
    <svg
        height={radius * 2}
        width={radius * 2}
        style={{ 
            fontSize: 0,
            display: 'inline-block',
        }}
    >
        <circle
            className={` progress-ring ${ring ? 'active' : ''}`}
            stroke={color}
            fill="transparent"
            strokeWidth={ stroke }
            strokeDasharray={ circumference() + ' ' + circumference() }
            style={ { strokeDashoffset } }
            stroke-width={ stroke }
            r={ normalizedRadius() }
            cx={ radius }
            cy={ radius }
        />
    </svg>
  )
}

export default ProgressRing