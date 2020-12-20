import React from 'react';

function Content(props) {
    return (
        <div className='content'>
            <hr />
            {props.children}
            <hr />
        </div>
    )
}

export default Content;