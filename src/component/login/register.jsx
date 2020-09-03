import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { login } from "../API/index.jsx";

class RegisterComponent extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        err: {
            match: false,
        }
    }

    render() {
        return ( 
            <React.Fragment>
                <form onSubmit={ this.handleFormSubmit }>
                    <div className="formGroup">
                        <input className="form-control" type="text" name="name" onChange={ this.handleChangeInput } value={ this.state.name }/>
                    </div>
                    <div className="formGroup">
                        <input className="form-control" type="email"name="email"  onChange={ this.handleChangeInput } value={ this.state.email }/>
                    </div>
                    <div className="formGroup">
                        <input className="form-control" type="password" name="password" onChange={ this.handleChangeInput } value={ this.state.password }/>
                    </div>
                    <div className="formGroup">
                        <input className="form-control" type="password" name="confirmPassword" onChange={ this.handleChangeInput } value={ this.state.confirmPassword }/>
                        { this.state.err.match && (<div className="inv">Pawword Doen't Match</div> )}
                    </div>
                    <button className="btn btn-primary" type="submit">Create Account</button>
                </form>
                <Link to="/login">Already have an Account</Link>
            </React.Fragment>
         );
    }

    handleChangeInput = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault()
        this.checkConfirmPassword();
        this.setState()
        console.log(this.state)
        //login(this.state)
        //return <Link  to="/"></Link>
    }

    // Validation
    checkConfirmPassword = ()=> {
        this.state.password !== this.state.confirmPassword? this.setState({err: {match: true}}) : this.setState({err: {match: false}})
    }

}
 
export default RegisterComponent;