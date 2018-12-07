import React from 'react';
import axios from 'axios';
import { decodeToken } from '../../lib/auth';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('this is user id', decodeToken().sub);
  }
  componentDidMount() {
    axios.get(`/api/profile/${decodeToken().sub}`)
      .then(result => {

        this.setState({ user: result.data });
        console.log('we have profile', this.state.user);
      });
  }
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <div className="profile-page">
          {this.state.user
            ?
            <p>{this.state.user.bio}</p>
            :
            <p>Loading...</p>
          }
        </div>
      </div>
    );
  }
}



export default Profile;
