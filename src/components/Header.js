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

          <div className="navbar-item">
            <Link id="nav-item" className="navbar-item" to="/">HOME</Link>
            <span className="navbar-underline"></span>
          </div>

          <div className="navbar-item">
            <Link id="nav-item" className="navbar-item" to="/artwork">INDEX</Link>
            <span className="navbar-underline"></span>
          </div>

          <div className="navbar-item">
            {isAuthenticated() && <Link id="nav-item" className="navbar-item" to="/messages">MESSAGES</Link>}
            <span className="navbar-underline"></span>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a id="nav-item" className="navbar-link">
              ACCOUNT
            </a>
            <span className="navbar-underline"></span>
            <div className="navbar-dropdown is-right">
              {!isAuthenticated() && <Link id="nav-item" className="navbar-item" to="/login">LOG IN</Link>}
              {!isAuthenticated() && <Link id="nav-item" className="navbar-item" to="/register">REGISTER</Link>}
              {isAuthenticated() && <Link id="nav-item" className="navbar-item" to='/artwork/new'>ADD AN ARTWORK</Link>}
              {isAuthenticated() && <Link id="nav-item" className="navbar-item" to="/basket">BASKET</Link>}
              {isAuthenticated() && <Link id="nav-item" className="navbar-item" to={`/profile/${decodeToken().sub}`}>PROFILE</Link>}
              {isAuthenticated() && <a onClick={this.handleLogout} id="nav-item" className="navbar-item">LOG OUT</a>}
            </div>
          </div>
        </nav>

        {isAuthenticated() && <p id="welcome-back">WELCOME BACK {decodeToken().username.toUpperCase()}!</p>}
      </section>
    );
  }
}

export default withRouter(Header);
