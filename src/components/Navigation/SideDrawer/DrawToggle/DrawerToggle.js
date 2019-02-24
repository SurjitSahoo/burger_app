import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawToggle = props => (
    <div onClick={props.click} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawToggle;