import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showbackdrop : false
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