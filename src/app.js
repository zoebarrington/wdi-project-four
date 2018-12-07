import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ArtworkIndex from './components/artworks/ArtworkIndex';
import ArtworkShow from './components/artworks/ArtworkShow';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import ArtworkEdit from './components/artworks/ArtworkEdit';
import Header from './components/Header';
import ArtworkNew from './components/artworks/ArtworkNew';
import Home from './components/Home';
import Basket from './components/Basket';
import PurchaseHistory from './components/PurchaseHistory';
import Profile from './components/auth/Profile';


import './scss/main.scss';
import 'bulma';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className = "container">
            <Switch>
              <Route exact path="/artwork" component={ArtworkIndex} />
              <Route exact path="/" component={Home} />
              <Route exact path='/basket' component={Basket}/>
              <Route exact path='/purchases' component={PurchaseHistory}/>
              <Route path='/artwork/:id/edit' component={ArtworkEdit}/>
              <Route exact path="/artwork/new" component={ArtworkNew} />
              <Route path="/artwork/:id" component={ArtworkShow} />
              <Route exact path="/login" component={AuthLogin} />
              <Route exact path="/register" component={AuthRegister} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
