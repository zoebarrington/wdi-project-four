import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <section id="header">
        <nav className="navbar-end">
          <Link id="logo" className="navbar-start" to="/"><img src="http://artxchange.org/wp-content/uploads/2017/04/ArtX_Logo_Gallery_RED-1-e1493498798972.png"/></Link>
          <Link className="navbar-item" to="/">HOME</Link>
          <Link className="navbar-item" to="/artwork">INDEX</Link>
          {isAuthenticated() && <Link className="navbar-item" to="/messages">MESSAGES</Link>}
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              ACCOUNT
            </a>
            <div className="navbar-dropdown is-right">
              {!isAuthenticated() && <Link className="navbar-item" to="/login">LOG IN</Link>}
              {!isAuthenticated() && <Link className="navbar-item" to="/register">REGISTER</Link>}
              {isAuthenticated() && <Link className="navbar-item" to='/artwork/new'>ADD AN ARTWORK</Link>}
              {isAuthenticated() && <Link className="navbar-item" to="/basket">BASKET</Link>}
              {isAuthenticated() && <Link className="navbar-item" to={`/profile/${decodeToken().sub}`}>PROFILE</Link>}
              {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">LOG OUT</a>}
            </div>
          </div>
        </nav>
        {isAuthenticated() && <p>WELCOME BACK {decodeToken().username.toUpperCase()}!</p>}

      </section>
    );
  }
}

export default withRouter(Header);
