import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { login } from "../API/index.jsx";

class LoginComponent extends Component {
    state = { 
        email: '',
        password: ''
    }

    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={ this.handleFormSubmit }>
                    <div className="formGroup">
                        <input className="form-control m-2" type="email"name="email" onChange={ this.handleChangeInputEmail } value={ this.state.email }/>
                    </div>
                    <div className="formGroup">
                        <input className="form-control" type="password" onChange={ this.handleChangeInputPassword } value={ this.state.password }/>
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                </form>
                <Link to="/register">Get an Account</Link>
            </React.Fragment>
         );
    }

    handleChangeInputEmail = (e)=> {
        this.setState({
            email: e.target.value
        })
    }
    handleChangeInputPassword = (e)=> {
        this.setState({
            password: e.target.value
        })
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault()
        console.log(this.state)
        // call the API
        login(this.state)
        return <Link  to="/"></Link>
    }

}
 
export default LoginComponent;