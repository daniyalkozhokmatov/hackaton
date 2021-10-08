import React, { Component } from 'react';
import EarthPage from '../pages/EarthPage';
import MarsPage from '../pages/MarsPage'
import StarShipPage from '../pages/StarShipPage';
import StarsShipPage from '../pages/StarsShipPage'
import PPagination from '../components/PPagination';
import HomePage from '../pages/HomePages';
import AboutUs from './AboutUs';
import Slider from '../Slider/Slider'
import Foooter from '../Footer/Foooter'

class Main extends Component {
    render() {
        return (
            <>
            <section id="home">
            <HomePage/>
            </section>

            <section id="slider">
            <Slider/>
            </section>

            <section id="mars">
            <MarsPage/>
            </section>

        
        
            <section id="earth">
             <EarthPage/>
            </section>

            <section id="starship">
             <div style={{display: "flex", justifyContent: 'space-evenly'}}>
             <StarShipPage/>
             <StarsShipPage/> 
            </div>
            </section>
            
        
       

            <PPagination/>
        
            <section id="aboutus">
            <AboutUs/>
            </section>

            <Foooter/>

           
        
            </>
        );
    }
}

export default Main;