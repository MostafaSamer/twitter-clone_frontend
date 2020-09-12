import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { search } from '../../API/index'
import './searchBar.css'

class SearchBar extends Component {
    state = { 
        searchKey: '',
        searchResult: [],
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="text-center searchResult">
                    <form className="form-search" onSubmit={ this.handleFormSubmit }>
                        <input className="form-control mb-3" placeholder="Search Twitter" type="search" name="searchKey" required autoFocus onChange={ this.handleChangeInput } value={ this.state.searchKey }/>
                    </form>
                    { this.state.searchResult.length? <div className="searchResult-outer"> { this.state.searchResult.map(user=> { return( <div key={user._id}>{user.name}</div> ) }) }</div> : <div></div> }
                </div>
            </React.Fragment>
        );
        
    }

    handleChangeInput = async(e)=> {
        await this.setState({
            [e.target.name]: e.target.value,
        });
        search(this.state, (res)=> {
            console.log(res)
            this.setState({
                searchResult: res.data
            })
        })
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault()
    }

}

export default withRouter(SearchBar);