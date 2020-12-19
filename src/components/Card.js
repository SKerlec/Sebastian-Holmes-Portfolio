import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {
    return (
        <div className='d-inline-block project-card' onClick={() => props.click(props.item)}>
            <hr />
            <img className='project-card-img' src={props.item.imgSrc} alt={props.item.title} />
            { props.item.selected && <CardInfo title={props.item.title} description={props.item.description} liveLink={props.item.liveLink} repoLink={props.item.repoLink} /> }
            <hr />
        </div>
    )
}

export default Card;