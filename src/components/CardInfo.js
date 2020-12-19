import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className='project-card-info' style={style}>
            <p className='project-card-title'>{props.title}</p>
            <a href={props.liveLink} target='_blank' rel='noopener noreferrer' className='project-card-link'>Live</a>/<a href={props.repoLink} target='_blank' rel='noopener noreferrer' className='project-card-link'>Repo</a>
            <p className='project-card-description'>{props.description}</p>
        </animated.div>
    )
}

export default CardInfo;