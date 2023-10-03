
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    Person: {
      fullName: "Adel",
      bio: "I'm a software engineer.",
      imgSrc: "./images/image.jpg",
      profession: "Software Engineer"
    },
    shows: false,
    timeSinceMount: 0
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleShows = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShows}>Toggle Shows</button>
        {shows && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" style={{height:'250px',width:'250px'}} />
            <p>{profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

