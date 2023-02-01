import React, { Component, MouseEvent } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import ParticlesBg from 'particles-bg'
// 4c3898a7de1c4ee288743bceb3522aeb

//INTERFACES
import { AppState } from './Interfaces/AppState/AppState';

//UTILS
import { faceRecognition } from './utils/faceRecognition';
import './App.css';

class App extends Component<Object, AppState> {
    state: AppState = {
      input: "", 
      imageURL: ""
    };


  onInputChange = (target: HTMLInputElement) => {
    this.setState({input: target.value}, () => console.log(this.state.input))
  }

  onButtonSubmit =async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.setState(
      {imageURL: this.state.input}
    )
    const recognition = await faceRecognition(new URL(this.state.input))
    !recognition ? 
    console.log("There is no faces on this image")
    :
    console.log(recognition)
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
        <FaceRecognition imageURL={this.state.imageURL}/>
        <ParticlesBg type="custom" bg={true} />
      </div>
    )
  }

}

export default App;

//W TYPESCRIPT Class Components są komponentami generycznymi.
//Zgodnie z dokumentacją wymagają one dostarczenia dwóch typów generycznych
// w kolejności typ Propsów , które otrzymujemy i typ STany który otrzymujemy
// jak wyżej.