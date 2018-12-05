import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ArtworkIndex from './components/artworks/ArtworkIndex';
import ArtworkShow from './components/artworks/ArtworkShow';
import Header from './components/Header';
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
