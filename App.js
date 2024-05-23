// src/App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Software Engineer"
    },
    showProfile: false,
    elapsedTime: 0
  };

  toggleProfile = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { showProfile, elapsedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {showProfile && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
