import React from 'react';
// import Grow from '../provideo/mars.mp4'
import mars2 from '../provideo/mars2.mp4';
// import spacei from '../img/spacei'
// import PropTypes from "prop-types";
import '../components/Mars.scss'

const Mars = () => {
    return (
    <>
    <div className="intro">
    <div className="video">
      <video className="videoMars" src={mars2} autoPlay muted loop ></video>
      <div data-aos="fade-up"><h1>Mars is our second <br /> home</h1></div>
      <div className=''>
      <a href="https://www.spacex.com/human-spaceflight/mars/" class="fciA1 navItem"><span class="fciSpan1">MORE</span></a>
      </div>
    </div>
    </div>
    </>
    );
};

export default Mars;
