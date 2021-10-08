import React from 'react';
import Navbar from '../animations/BurgerMenu/Navbar';
import Mars from '../components/Mars';
import { AdminContext } from '../contexts/AdminContext';
import LeftSidebar from '../left/LeftSideBar';
import LeftSideBarPage from './LeftSideBarPage';

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            {/* <LeftSideBarPage/> */}
            <Mars/>
            
            {/* <LeftSidebar/> */}
            {/* <AdminContext/> */}
        </div>
    );
};

export default MainPage;