import React from 'react';
import "./Portfolio.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';

const Portfolio = () => {
    return <div className='container'>
        <div className='website-card'>
            <iframe seamless="seamless" scrolling='no' className='iframe' title='netflix-clone' src='https://netflix-clone-kafehbre.netlify.app'></iframe>
            <div className='overlay'></div>
            <div className='infos'>
                <h1 className='info-heading'>Netflix Clone</h1>
                <p className='text'>I tried to mimic the design of the streaming platform Netflix with React. Here I worked with different hooks, state management, fetched different data from movies and series through an API (themoviedb API) and more...</p>
                <a className='info-text' href='https://netflix-clone-kafehbre.netlify.app'>
                    <WebAssetIcon ></WebAssetIcon>
                    <p className='link-text'>Website Link</p>
                </a>
                <a className='info-text' href='https://github.com/kabomboExe/netflix-clone'>
                    <GitHubIcon ></GitHubIcon>
                    <p className='link-text'>Repository Link</p>
                </a>

            </div>
        </div>
    </div>;
}

export default Portfolio;