import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from './component/home/home'
import LoginComponent from './component/login/login/login'
import RegisterComponent from './component/login/register/register'
import Error from './component/Error'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ HomeComponent } />
        <Route exact path='/login' component={ LoginComponent } />
        <Route exact path='/register' component={ RegisterComponent } />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
