import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showbackdrop : true
    };

    sideDrawerCloseHandler = () => {
        this.setState({showbackdrop : false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {return {showbackdrop : !prevState.showbackdrop};});
    }

    render(){
        return (
            <Aux>
                <Toolbar sidebarToggle={this.sideDrawerToggleHandler} />
                <SideDrawer show={this.state.showbackdrop} sideDrawerClose={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;