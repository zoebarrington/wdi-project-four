import React from 'react';
import axios from 'axios';
import { decodeToken, getToken } from '../../lib/auth';
import ArtworkMap from '../common/Map';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: null,
      userPosition: null,
      buttonName: 'Follow'
    };
    this.getLocation = this.getLocation.bind(this);
    this.getArtworks = this.getArtworks.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    console.log('this is user id', decodeToken().sub);
  }

  getLocation(pos) {
    this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, () => {
      this.getArtworks();
    });
  }

  getArtworks() {
    axios.get(`/api/profile/${decodeToken().sub}`)
      .then(res => this.setState({ artworks: res.data }));
  }

  handleFollow() {
    if(this.state.user.followedBy.includes(`${decodeToken().sub}`)) {
      const index = this.state.user.followedBy.indexOf(this.state.user);
      this.state.user.followedBy.splice(index, 1);
      this.setState({ buttonName: 'Follow' });
    } else {
      this.state.user.followedBy.push(`${decodeToken().sub}`);
      this.setState({ buttonName: 'Unfollow' });
    }
  }

  componentDidMount() {
    const token = getToken();
    axios.get(`/api/profile/${decodeToken().sub}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
      .then(result => {
        let buttonName;
        if(result.data.followedBy.includes(`${decodeToken().sub}`)) {
          buttonName = 'Unfollow';
        } else {
          buttonName = 'Follow';
        }
        this.setState({ user: result.data, buttonName: buttonName }, () => {
          console.log('we have profile', this.state.user);
        });
        navigator.geolocation.getCurrentPosition(this.getLocation, this.getArtworks);
      });
  }
  render() {
    const user= this.state.user;
    console.log('user', user);
    return (

      <div className="profile-page columns">
        <div className="card is-shady column is-3">
          {this.state.user
            ?
            <div className="user">
              <div id=" user-info">
                <p>{this.state.user.username}</p>
                <img id="profile-pic" src={this.state.user.profilePicture}/>
                <p>{this.state.user.bio}</p>
                <p>{this.state.user.createdBy}</p>
                <button className="follow" onClick={this.handleFollow}>{ this.state.buttonName }</button>
              </div>
            </div>
            :
            <p>Loading...</p>
          }
        </div>

        <div className="map column is-8">
          {!this.state.userPosition && !this.state.artworks
            ?
            <p>Loading map...</p>
            :
            <ArtworkMap
              userPosition={this.state.userPosition}
              artworks={this.state.artworks} />
          }
        </div>

        <div className="user-uploads">
          {this.state.user
            ?
            this.state.user.artworkAdded && this.state.user.artworkAdded.map(
              artwork => <div key = { artwork._id}> <p>{artwork.name}</p> </div>
            )
            :
            <p>Loading...</p>
          }
        </div>
      </div>


    );
  }
}



export default Profile;
