import { Link } from '@material-ui/core';
import React, {useState} from 'react';
import './style.scss'


const Navbar = () => {
    const [status, setStatus] = useState('close')
    window.addEventListener('scroll', function () {
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
    })
    return (
    <>  
<header>
<div class="container">
    <nav class="nav">
        <Link to="/" >
        <a href="/" class="logo">Space X.</a>
        </Link>
        <ul class="nav-list">
            <li>
                <Link  >
                <a href="#home" class="nav-link">Home</a>
                </Link>
            </li>
            <li>
                <Link to="/">
                <a href="#mars" class="nav-link">Mars</a>
                </Link>
            </li>
            <li>
                <Link to="/" >
                <a href="#earth" class="nav-link">Earth</a>
                </Link>
            </li>
            <li>
                <a href="#starship" class="nav-link">StarShip</a>
            </li>
            <li>
                <a href="#aboutus" class="nav-link">About us</a>
            </li>      
        </ul>
        
        <Link>
        <a className="reg" href="/sign-in" id="nav-cta">Sing In</a>
        </Link>
        <Link>
        <a className="reg" href="/sign-up" id='nav-cta'>Sing Up</a>
        </Link>
        <button className="switch__input" variant="outlined">Theme</button>
    </nav>
</div>
<div>
</div>
</header>
<section class="hero"></section>
    <section class="demo-content"></section>
    </>
    );
};

export default Navbar;