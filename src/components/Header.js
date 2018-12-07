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
        <nav className="navbar">
          <div className="navbar-item has-dropdown is-hoverable">
            <img src='./assets/affordablelogo-2.jpg'/>
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/artwork">Index</Link>
            {isAuthenticated() && <Link className="navbar-item" to='/artwork/new'>Add a Artwork</Link>}
            {isAuthenticated() && <Link className="navbar-item" to="/basket">Basket</Link>}
            {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Log Out</a>}
            {!isAuthenticated() && <Link className="navbar-item" to="/login">Log In</Link>}
            {!isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
            {isAuthenticated() && <Link className="navbar-item" to={`/profile/${decodeToken().sub}`}>Profile</Link>}
          </div>
        </nav>
        {isAuthenticated() && <p>Welcome back! {decodeToken().username}</p>}
      </section>
    );
  }
}

export default withRouter(Header);
