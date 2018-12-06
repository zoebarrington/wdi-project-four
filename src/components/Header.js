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
      <nav className="navbar">
        {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/artwork">Index</Link>
        {isAuthenticated() && <Link to={'/artwork/new'}>Add a Artwork</Link>}
        {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Log Out</a>}
        {!isAuthenticated() && <Link className="navbar-item" to="/login">Log In</Link>}
        {!isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}

      </nav>
    );
  }
}

export default withRouter(Header);
