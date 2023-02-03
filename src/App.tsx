import React, { Component, MouseEvent } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn';
import Register from './components/resgister/Register';
import ParticlesBg from 'particles-bg'
// 4c3898a7de1c4ee288743bceb3522aeb

//INTERFACES
import { AppState } from './Interfaces/AppState/AppState';

//UTILS
import { faceRecognition } from './utils/faceRecognition';
import { calculateFaceLocation } from './utils/calculateFaceLocation';
import './App.css';

class App extends Component<object, AppState> {
    state: AppState = {
      input: "", 
      imageURL: "",
      box: [],
      route: "signin",
      isSignedIn: false
    };

  onInputChange = (target: HTMLInputElement) => {
    this.setState({input: target.value})
  }

  onButtonSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.setState(
      {imageURL: this.state.input, input:"", box:[]},
      () => (document.querySelector("input") as HTMLInputElement).value = ""
    )
    const recognition = await faceRecognition(new URL(this.state.input))
    if(typeof recognition === "boolean") {
      console.log("There is no faces on this image");
      return;
    } else {
      const arrayOfBoundingObjects = calculateFaceLocation(recognition)
      this.setState({box:[...arrayOfBoundingObjects]})
    }
  }

  onRouteChange = (route:string) => {
    if(route === "signout" || route ==="signin" || route === "register") {
      this.setState({isSignedIn:false})
    } else {
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }


  render():JSX.Element {
    const {isSignedIn, imageURL, route, box } = this.state
    return(
      <div className='App'>
        <ParticlesBg type="custom" bg={true} />       
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {this.state.route === "home" ?
        <>
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}/>
            {
              imageURL[0] ? <FaceRecognition box={box}imageURL={imageURL}/> : null
            }
        </>
        :(      
          route === "signin" ?
            <SignIn onRouteChange={this.onRouteChange}/>
          :
            <Register onRouteChange={this.onRouteChange} />
        )
        }
      </div>
    )
  }

}

export default App;

//W TYPESCRIPT Class Components są komponentami generycznymi.
//Zgodnie z dokumentacją wymagają one dostarczenia dwóch typów generycznych
// w kolejności typ Propsów , które otrzymujemy i typ STany który otrzymujemy
// jak wyżej.
//box={this.state.box as BoundingBoxArrayOfObjects} 