import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from './searchBar/searchBar'

class HomeComponent extends Component {
    state = {  }
    render() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentUser === null) {
            this.handleLogout()
        }
        return ( 
            <>
                Welcome Home!
                <br/><br/>
                <SearchBar />
                <br/><br/>
                <button onClick={ this.handleLogout }>Login Out!</button>
            </>
        );
    }
    handleLogout = ()=> {
        localStorage.setItem('currentUser', null)
        this.props.history.push('/login')
    }
}

export default withRouter(HomeComponent);