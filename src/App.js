import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

import './App.css';


class App extends React.Component {
  render() {

   
    return (
      <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
