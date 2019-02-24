import React from 'react';

import imgLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={imgLogo} alt="Logo" />
    </div>
)

export default Logo;