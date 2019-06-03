import styled from 'styled-components';

export const NavWrapper = styled.nav `
@import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap');
@import url('https://fonts.googleapis.com/css?family=Great+Vibes&display=swap');

    background: var(--mainPurple);

    .navbar-brand {
        font-family: 'Fredericka the Great', cursive;
        font-size: 25px;
        transition: 1.7 linear;

        &:hover {
            color var(--mainLightGreen);
            transform: rotate(-3deg);
        }
    }

    .nav-item .nav-link {
        font-weight: lighter;
        color: var(--mainSnow);
        transition: all 0.4s ease-in-out;
    } 
    
    .text-black {
        color: var(--mainDarker);
        text-decoration: none;
    }

    .cart {
        position: relative;
        left: 15px;
    }

    .count {
        position: relative;
        top: 10px;
        left: -2px;
        font-size: 18px;
        font-weight: bold;
        color: var(--mainSnow);
    }
   
`