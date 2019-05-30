import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {  
    state = {
        isSignedIn: false
    }

    componentDidMount () {
        if(localStorage.getItem('firebaseui::rememberedAccounts')) {
            this.setState.isSignedIn = true;
          };
    }
        
    render() {
        var isSignedIn = this.state.isSignedIn;
        if (isSignedIn) {
            return (
                <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/signin">Login</NavLink>
                </nav>
            );
        } else {
            return (
                <nav>
                <NavLink to="/" >Home</NavLink>
                <div className="signin" align="right">
                <NavLink to="/signin">Logout</NavLink>
                </div>
                </nav>
            );
        }
        
    }
};

export default Nav;