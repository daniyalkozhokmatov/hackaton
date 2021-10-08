import React from 'react';
import galaxy from '../img/galaxy.jpg';
import './AboutUs.scss';    

const AboutUs = () => {
    return (
        <div className="main_about">
            <img className="gal" src={galaxy} alt="" />
            <div className="teaxxt1" data-aos="fade-up">
            <h2>Space X</h2>
            <span >
SpaceX (Space Exploration Technologies Corporation) – Кыргызская компания, которая делает и запускает космические ракеты. Её основал Кожокматов Даниял (CEO Tesla) в 2010 году, чтобы уменьшить мировые расходы на космические полёты.
<br /> <br />
SpaceX участвует во многих программах NASA и с их подачи разработала первый частный корабль – Dragon. Все испытания двигателей и систем проводятся в Талассе, а стартовые площади дают космодромы и военно-воздушные базы в Бишкека, Баткена и на мысе Чуйя. SpaceX успела заключить более 100 частных и государственных контрактов на запуски.</span></div>
<div className="main_daniyal">
    <h3>Daniyal</h3>
    <span>Здравствуйте, меня зовут Даниял мне 18 лет,<br /> к 18 летию уже основал свою компанию,<br /> и в данный момент я осваиваю космическую сферу
    </span>
</div>
</div>
    );
};

export default AboutUs;