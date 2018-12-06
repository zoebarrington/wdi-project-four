import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ArtworkIndex from './components/artworks/ArtworkIndex';
import ArtworkShow from './components/artworks/ArtworkShow';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Header from './components/Header';
import ArtworkNew from './components/artworks/ArtworkNew';
import Home from './components/Home';

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
              <Route path="/artwork/:id" component={ArtworkShow} />
              <Route path="/artwork/new" component={ArtworkNew} />
              <Route path="/login" component={AuthLogin} />
              <Route path="/register" component={AuthRegister} />
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
