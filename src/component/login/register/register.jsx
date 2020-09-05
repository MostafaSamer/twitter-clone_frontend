import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login } from "../../API/index.jsx";
import SideDiv from '../sideDiv/sideDiv'
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
                <div className="row">
                    <div className="col-6">
                        <SideDiv />
                    </div>
                    <div className="col-6 text-center">
                        { this.state.err.match && (<div className="err">Pawword Doen't Match</div> )}
                        <form className="form-signin" onSubmit={ this.handleFormSubmit }>
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                        <input className="form-control mb-3" required autoFocus placeholder="Name" type="text" name="name" onChange={ this.handleChangeInput } value={ this.state.name }/>
                        <input className="form-control mb-3" required autoFocus placeholder="Email address" type="email"name="email"  onChange={ this.handleChangeInput } value={ this.state.email }/>
                        <input className="form-control mb-3" required autoFocus placeholder="Password" type="password" name="password" onChange={ this.handleChangeInput } value={ this.state.password }/>
                        <input className="form-control mb-3" required autoFocus placeholder="Confirm password" type="password" name="confirmPassword" onChange={ this.handleChangeInput } value={ this.state.confirmPassword }/>
                        <button className="btn btn-lg btn-outline-primary btn-block mt-3" type="submit">Create Account</button>
                    </form>
                    <Link to="/login">Already have an Account</Link>
                    </div>
                </div>
            </React.Fragment>
         );
    }

    handleChangeInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault()
        if(this.checkConfirmPassword()){
            this.setState({err: {match: true}})
            return;
        }
        this.setState({err: {match: false}})
        this.props.history.push('/login')
    }

    // Validation
    checkConfirmPassword = ()=> {
        return this.state.password !== this.state.confirmPassword? true : false;
    }

}
 
export default withRouter(RegisterComponent);