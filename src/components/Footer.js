import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="footer">
        <div>
          <a href='https://www.facebook.com/?stype=lo&jlou=AfcABecs2ZiJkU8pU2G1EUu1fWTxUcVbdiW0F6s0ETcudpW_hTeORq4bpo3zHUnEoL7xHcdQ46A1eSeHgSO5CLAf&smuh=18690&lh=Ac_SO3cWZmQWvJAg'><i className="fab fa-facebook"></i></a>
          <a href='https://www.instagram.com/'><i className="fab fa-instagram"></i></a>
          <a href='https://twitter.com/'><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    );
  }
}


export default Footer;
