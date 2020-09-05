import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login } from "../../API/index.jsx";
import SideDiv from '../sideDiv/sideDiv'
import './login.css'

class LoginComponent extends Component {
    state = { 
        email: '',
        password: '',
        err: ''
    }

    render() { 
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentUser !== null) {
            this.props.history.push('/')
        }
        return ( 
            <React.Fragment>
                <div className="row">
                        <div className="col-6">
                            <SideDiv />
                        </div>
                        <div className="col-6 text-center">
                            <form className="form-signin" onSubmit={ this.handleFormSubmit }>
                                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                <div className="err mb-3 text-danger">{ this.state.err }</div>
                                <input className="form-control mb-3" placeholder="Email address" type="text" name="email" required autoFocus onChange={ this.handleChangeInput } value={ this.state.email }/>
                                <input className="form-control mb-3" placeholder="Password" type="password" name="password" required autoFocus onChange={ this.handleChangeInput } value={ this.state.password }/>
                                <button className="btn btn-lg btn-outline-primary btn-block mt-3" type="submit">Login</button>
                            </form>
                            <Link to="/register">Sign up for twitter</Link>
                        </div>
                    </div>
            </React.Fragment>
         );
    }

    handleChangeInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value,
            err: ''
        });
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault()
        login({
            email: this.state.email,
            password: this.state.password,
        }, (res)=> {
            if(!res.success) {
                let err = res.msg
                this.setState({ err })
            } else {
                localStorage.setItem('currentUser', JSON.stringify(res.data))
                this.props.history.push('/')
            }
            
        })
    }

}
 
export default withRouter(LoginComponent);