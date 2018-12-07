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
      <div className="profile-page columns">
        <div className="column is-3">
          {this.state.user
            ?
            <div className="user">
              <div id="card is-shady user-info">
                <p>{this.state.user.username}</p>
                <img id="profile-pic" src={this.state.user.profilePicture}/>
                <p>{this.state.user.bio}</p>
              </div>
            </div>
            :
            <p>Loading...</p>
          }
        </div>
      </div>


    );
  }
}



export default Profile;
