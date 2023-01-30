import React from 'react';
import AboutMe from '../components/AboutMe';
import Wave from '../components/Wave';
import "./Home.css";


const Home = () => {
    return <div className='container'>
        <div className='welcoming-paragraph'>
            <h1 className='first-paragraph'>Hi there, I'm Kai.</h1>
            <h2 className='sec-paragraph'>I am studying Digital Media at the University of Bremen.
                <br></br>My field of study is Multimedia Engineering.</h2>
        </div>
        <Wave></Wave>
        <AboutMe></AboutMe>
    </div>;

}

export default Home;