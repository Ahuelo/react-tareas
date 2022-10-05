import React from 'react';
import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import './freeCodeCampLogo.css';

const LogoFreeCodeCamp = () => (
    <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
    </div>
);

export { LogoFreeCodeCamp };