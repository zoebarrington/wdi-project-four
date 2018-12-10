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
      <section>
        <nav className="navbar-end">
          <Link className="navbar-start" to="/"><img src="http://artxchange.org/wp-content/uploads/2017/04/ArtX_Logo_Gallery_RED-1-e1493498798972.png"/></Link>
          <a className="navbar-item">
            <Link className="navbar-item" to="/">Home</Link>
          </a>
          <Link className="navbar-item" to="/artwork">Index</Link>
          {isAuthenticated() && <Link className="navbar-item" to="/messages">Messages</Link>}
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Account
            </a>
            <div className="navbar-dropdown is-right">
              <a className="navbar-item">
                {!isAuthenticated() && <Link className="navbar-item" to="/login">Log In</Link>}
              </a>
              <a className="navbar-item">
                {!isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              </a>
              <a className="navbar-item">
                {isAuthenticated() && <Link className="navbar-item" to='/artwork/new'>Add a Artwork</Link>}
              </a>
              <a className="navbar-item">
                {isAuthenticated() && <Link className="navbar-item" to="/basket">Basket</Link>}
              </a>
              <a className="navbar-item">
                {isAuthenticated() && <Link className="navbar-item" to={`/profile/${decodeToken().sub}`}>Profile</Link>}
              </a>
              <a className="navbar-item">
                {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Log Out</a>}
              </a>
            </div>
          </div>
        </nav>
        {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}

      </section>
    );
  }
}

export default withRouter(Header);
