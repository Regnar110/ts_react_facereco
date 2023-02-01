import React, { Component, MouseEvent } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ParticlesBg from 'particles-bg'
// 4c3898a7de1c4ee288743bceb3522aeb
//INTERFACES
import { AppState } from './Interfaces/AppState/AppState';

import './App.css';

class App extends Component<Object, AppState> {
    state: AppState = {
      input: ""
    };


  onInputChange = (target: HTMLInputElement) => {
    this.setState({input: target.value}, () => console.log(this.state.input))
  }

  onButtonSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(this.state.input)
  }


  render():JSX.Element {
    return(
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <ParticlesBg type="custom" bg={true} />
      </div>
    )
  }

}

export default App;

//W TYPESCRIPT Class Components są komponentami generycznymi.