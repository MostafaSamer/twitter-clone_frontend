import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeComponent from './component/home/home'
import LoginComponent from './component/login/login/login'
import RegisterComponent from './component/login/register/register'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={ HomeComponent } />
      <Route path='/login' component={ LoginComponent } />
      <Route path='/register' component={ RegisterComponent } />
    </BrowserRouter>
  );
}

export default App;
