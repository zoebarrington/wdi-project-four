import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/artwork">Index</Link>
      </nav>
    );
  }
}

export default withRouter(Header);
