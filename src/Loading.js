import React from 'react'
import './Loading.css';

import back from './img/gradienta-LeG68PrXA6Y-unsplash.jpg';

const Loading = () => {
    return (
        <div className='loading' style={{backgroundImage:`url${back}`}}>
            <h1 className='loading__sign'>Loading...</h1>
        </div>
    )
}

export default Loading
