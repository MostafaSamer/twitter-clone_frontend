import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class HomeComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                Welcome Home!
                <button onClick={ this.handleLogout }>Login Out!</button>
            </React.Fragment>
         );
    }
    handleLogout = ()=> {
        return(<Redirect push to='/login' />)
    }
}
 
export default HomeComponent;