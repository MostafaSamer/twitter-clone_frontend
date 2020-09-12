import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { register } from "../../API/index.jsx";
import SideDiv from '../sideDiv/sideDiv'

class RegisterComponent extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        msg: '',
        err: '',
        errName: '',
        errEmail: '',
        errPassword: '',
        errPasswordMin: '',
        errPasswordMax: '',
        errMatch: false,
        success: ''
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-6">
                        <SideDiv />
                    </div>
                    <div className="col-6 text-center">
                        <form className="form-signin" onSubmit={ this.handleFormSubmit }>
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                        <div className="err mb-3 text-danger">{ this.state.err }</div>
                        <div className="err mb-3 text-success">{ this.state.msg }</div>
                        <input className="form-control mb-3" autoFocus placeholder="Name" type="text" name="name" onChange={ this.handleChangeInput } value={ this.state.name }/>
                        <div className="err mb-3 text-danger">{ this.state.errName }</div>
                        <input className="form-control mb-3" placeholder="Email address" type="email"name="email"  onChange={ this.handleChangeInput } value={ this.state.email }/>
                        <div className="err mb-3 text-danger">{ this.state.errEmail }</div>
                        <input className="form-control mb-3" placeholder="Password" type="password" name="password" onChange={ this.handleChangeInput } value={ this.state.password }/>
                        <div className="err mb-3 text-danger">{ this.state.errPassword }</div>
                        <div className="err mb-3 text-danger">{ this.state.errPasswordMin }</div>
                        <div className="err mb-3 text-danger">{ this.state.errPasswordMax }</div>
                        <input className="form-control mb-3" placeholder="Confirm password" type="password" name="confirmPassword" onChange={ this.handleChangeInput } value={ this.state.confirmPassword }/>
                        { this.state.errMatch && (<div className="err mb-3 text-danger">Password Doesn't Match</div> )}
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
            [e.target.name]: e.target.value,
            msg: '',
            err: '',
            errName: '',
            errEmail: '',
            errPassword: '',
            errPasswordMin: '',
            errPasswordMax: '',
            errMatch: false,
            success: ''
        });
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault()
        if(this.handleValidation()){
            register({
                name: this.state.name,
                email: this.state.email,
                pass: this.state.password,
            }, (res)=> {
                if(!res.success) {
                    let err = res.msg
                    this.setState({ err })
                } else {
                    this.setState({ msg: 'Successfully Registed, Redirect to login page...' })
                    setTimeout(()=> {this.props.history.push('/login')}, 4000)
                }
            })
        }
    }

    // Validation
    handleValidation = ()=> {
        if(this.state.name === '') {this.setState({errName: 'Name is require'}); return false}
        if(this.state.email === '') {this.setState({errEmail: 'Email is require'}); return false}
        if(this.state.password === '') {this.setState({errPasswordMin: 'Password is require'}); return false}
        if(this.state.password.length > 16) {this.setState({errPasswordMax: 'Password must be less than 16 characters'}); return false}
        if(this.state.password.length < 8) {this.setState({errPasswordMin: 'Password must be more than 8 characters'}); return false}
        if(this.state.password !== this.state.confirmPassword) {this.setState({errMatch: true}); return false}
        return true;
    }

}

export default withRouter(RegisterComponent);