import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ParticlesBg from 'particles-bg'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <ParticlesBg type="custom" bg={true} />
      </div>
    )
  }

}

export default App;
