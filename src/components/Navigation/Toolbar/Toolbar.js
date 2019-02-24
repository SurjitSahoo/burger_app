import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawerToggle';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawToggle click={props.sidebarToggle} />
        <div className={classes.Logo}><Logo /></div>            
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;