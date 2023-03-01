import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
    return <div className='container'>
        <div className='website-card'>
            <iframe seamless="seamless" scrolling='no' className='iframe' title='netflix-clone' src='https://netflix-clone-kafehbre.netlify.app'></iframe>
            <div className='overlay'></div>
            <div className='infos'>
                <h1 className='text'>Test</h1>
            </div>
        </div>
    </div>;
}

export default Portfolio;