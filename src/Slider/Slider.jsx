import React from 'react';
import './Slider.scss'



const Footer = () => {

//   const skills = document.querySelectorAll(".skills-item__progress--active"),
//     skillsSection = document.querySelector("#skills");
// document.body.addEventListener("mouseover", e => {
//     // e.path.includes(skillsSection) ? (console.log("mouseover"), skills.forEach(e => {
//     //     const t = e.getAttribute("data-per");
//     //     e.style.width = t + "%"
//     // })) : skills.forEach(e => {
//     //     e.style.width = "0%"
//     // })
// });
    return (
        <div>
    <section id="skills">
    <div class="container">
      <div class="section-title">Вероятности жизни на других планетах</div>
      <div class="skills">
        <div class="skills-item">
          <span class="skills-item__name">Earth</span>
          <div class="skills-item__progress">
            <div class="skills-item__progress--active" data-per="100"></div>
          </div>
        </div>
        <div class="skills-item">
          <span class="skills-item__name">Mars</span>
          <div class="skills-item__progress">
            <div class="skills-item__progress--active" data-per="70"></div>
          </div>
        </div>
        <div class="skills-item">
          <span class="skills-item__name">Procsima B</span>
          <div class="skills-item__progress">
            <div class="skills-item__progress--active" data-per="60"></div>
          </div>
        </div>
        <div class="skills-item">
          <span class="skills-item__name">Kepler -62e</span>
          <div class="skills-item__progress">
            <div class="skills-item__progress--active" data-per="40"></div>
          </div>
        </div>
        <div class="skills-item">
          <span class="skills-item__name">Uran</span>
          <div class="skills-item__progress">
            <div class="skills-item__progress--active" data-per="35"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
};

export default Footer;