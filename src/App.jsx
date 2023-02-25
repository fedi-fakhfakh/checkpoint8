import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './Profile';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person : { 
        fullName : 'fedi fakhfakh',
        bio : "i'm 15 and i'm still studying", 
        imgSrc:"../public/imgs/téléchargement.jpg", 
        profession : 'still studying'
      },
      show:false,
      mountedTime: null,
      elapsedTime: null
    };
  }
  componentDidMount() {
    if (this.state.show) {
      const mountedTime = new Date();
      this.setState({ mountedTime });
      this.intervalId = setInterval(() => {
        const elapsedTime = Math.floor((new Date() - mountedTime) / 1000);
        this.setState({ elapsedTime });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleButtonClick = () => {
    this.setState(prevState => ({ show: !prevState.show }), () => {
      if (this.state.show) {
        const mountedTime = new Date();
        this.setState({ mountedTime });
        this.intervalId = setInterval(() => {
          const elapsedTime = Math.floor((new Date() - mountedTime) / 1000);
          this.setState({ elapsedTime });
        }, 1000);
      } else {
        clearInterval(this.intervalId);
      }
    });
  }
  render() {
    return (
      <div>
        <p>Time amount is:{this.state.elapsedTime}</p>
        {this.state.show ? <Profile fullName={this.state.Person.fullName} bio={this.state.Person.bio} imgSrc={this.state.Person.imgSrc} profession={this.state.Person.profession}/> : null}
        <button onClick={this.handleButtonClick}>show</button>
      </div>
    );
  }
}
