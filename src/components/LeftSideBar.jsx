import React from 'react';
import '../components/LeftSideBar.scss';


function openMenu() {
    document.getElementById("sidebar").classList.toggle('active');
}

const LeftSideBar = () => {
    return (
        <div id="sidebar">
            <div className="toggle-btn" onClick="openMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>Дополнительное</li>
                <li><a href="/">Вход</a></li>
                <li><a href="/">Регистрация</a></li>
                <li><a href="/">Лайки</a></li>
            </ul>
        </div>
    );
};

export default LeftSideBar;