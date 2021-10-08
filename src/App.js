import React from 'react';
// import BurgerMenu from './animations/BurgerMenu';
// import styled, { ThemeProvider } from 'styled-components';
// import {lightTheme, darkTheme} from './themes.js';
import Routes from './Routes';
// import MarsPage from './pages/MarsPage';
// import EarthPage from './pages/EarthPage';
import Navbar from './animations/BurgerMenu/Navbar';
// import StyledApp from s
// import StarShipPage from './pages/StarShipPage';
// import { GlobalStyles } from '@mui/styled-engine';



// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;


const App = () => {
//   const [theme, setTheme] = useState('light');
// const themeToggler = () => {
//   theme === 'light' ? setTheme("dark") : setTheme('light');
// };

  return (
    <div>
      <Navbar />
      <Routes/>
    </div>
  );
};

export default App;