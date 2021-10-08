import React from 'react';
import {Carousel} from '3d-react-carousal'
import planeta1 from '../img/planeta1.jpg';
import planeta2 from '../img/planeta2.jpg';
import planeta3 from '../img/planeta3.jpg';
import planeta4 from '../img/planeta4.jpg';
import planeta5 from '../img/planeta5.jpg';


import './Earth.scss'
// import Carousel from '.3d-react-carousel'

const Earth = () => {
    let slides = [
   
        <img  className="im1" src={planeta5} alt="1" />,
      <img className="im1" src={planeta1} alt="2" />  ,
      <img className="im1" src={planeta2} alt="3" />  , 
      <img className="im1" src={planeta4} alt="4" />  ,
      <img className="im1" src={planeta3} alt="5" />  
     
      ];

    return (
        <>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header> 
        <br/>
        <br/>
        <br/>
        <Carousel slides={slides}/>
{/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
      </div>
      <div>
      <a href="https://www.spacex.com/human-spaceflight/earth/index.html" class="fciA navItem"><span class="fciSpan">MORE</span></a>
      </div>
      </>
    );
};

export default Earth;