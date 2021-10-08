import React from 'react';
import './Foooter.scss';
import Icon from '@mui/material/Icon';
import { Link } from '@material-ui/core';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Foooter = () => {
    return (
  <section id="footer">
    <div class="container">
      <div class="footer">
        <div class="footer-nav-links">
          <ul class="footer-nav-links__list">
            <li class="footer-nav-links__item">
              
              <a href="#home" class="footer-nav-links__link">Home</a>

            </li>
            <li class="footer-nav-links__item">
              <a href="#mars" class="footer-nav-links__link">Mars</a>
            </li>
            <li class="footer-nav-links__item">
              <a href="#earth" class="footer-nav-links__link">Earth</a>
            </li>
            <li class="footer-nav-links__item">
              <a href="#starship" class="footer-nav-links__link">StarShip</a>
            </li>
            <li class="footer-nav-links__item">
              <a href="#aboutus" class="footer-nav-links__link">About us</a>
            </li>
          </ul>
        </div>
        <div class="footer-contacts">
          <span>Contacts</span>
          <div class="footer-contacts__wrapper">
            <ul>
              <li>
                Kg, Bishekek
              </li>
              <li>
                +996(700)-80-32-65
              </li>
              <li>
                adonis166410@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-socials">
          <span>Socials</span>
          <Icon/>
        </div>
      </div>
    </div>
  </section>
    );
};

export default Foooter;