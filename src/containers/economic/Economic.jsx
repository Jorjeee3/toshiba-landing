import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'

import ProgressRing from '../../components/progressRing/ProgressRing'

import './economic.scss'

function Economic({ endPoint, rotate, color }) {
    const [ progress, setProgress ] = useState(Number(0))
    const [ show, setShow ] = useState(false)
    const [size, setSize] = useState([0, 0]);
    const viewRef = useRef();
    const [ visible, setVisible ] = useState(false)

    function useWindowSize() {
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();

            return () => window.removeEventListener('resize', updateSize);
        }, []);

        return size;
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting)
        })
        
        const interval = setInterval(() => {
            if (visible) {
                setProgress(progress + Number(endPoint))

                if (progress === Number(endPoint)) {
                    setProgress(progress)
                    clearInterval(interval);
                }
            }
        }, 1000);

        const intervalOpacity = setInterval(() => {
            if (visible) {
                setShow(true)
                clearInterval(intervalOpacity);
            }
        }, 3000);

        observer.observe(viewRef.current)
    }, [progress, endPoint, visible])

  return (
    <div ref={viewRef} className='circle-box-wrapper' id='tokenomics' style={{ 
        position: 'absolute',
    }}
    > 
        <div className='circle-box' style={{ 
            transform: `rotate(${rotate}deg)`,
            display: 'block'
        }}>
            <span className={`circle-percentage ${show ? 'active' : ''}`}
                style={{ 
                    position: 'absolute',
                    display: 'flex',
                    transition: 'all 0.5s ease-in',
                    zIndex: '0',
                    fontWeight: '600',
                    fontSize: '25px',
                    opacity: 0,
                    transform: `rotate(${-rotate}deg)`
                }}
            >{ endPoint + '%' }</span>
          
            <ProgressRing 
                color={color}   
                radius={ useWindowSize()[0] >= 1200 ? 276 : 200 }
                stroke={ 55 }
                progress={ progress }
            />
        </div>
    </div>
  )
}

export default Economic