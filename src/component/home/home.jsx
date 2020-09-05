import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomeComponent extends Component {
    state = {  }
    render() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentUser === null) {
            this.handleLogout()
        }
        return ( 
            <React.Fragment>
                Welcome Home!
                <button onClick={ this.handleLogout }>Login Out!</button>
            </React.Fragment>
         );
    }
    handleLogout = ()=> {
        localStorage.setItem('currentUser', null)
        this.props.history.push('/login')
    }
}
 
export default withRouter(HomeComponent);