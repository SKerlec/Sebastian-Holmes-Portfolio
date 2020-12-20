import React from 'react';
import './Hero.css';

function Hero(props) {
    return (
        <div className='hero'>
            <div className='hero-content'>
                { props.title && <h1>{props.title}</h1> }
                { props.subtitle && <h3>{props.subtitle}</h3> }
                { props.phrase && <h4>{props.phrase}</h4> }
            </div>
        </div>
    )
}

export default Hero;