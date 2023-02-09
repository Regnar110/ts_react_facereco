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
import { AppState, LoadedUser } from './Interfaces/State/AppState';
import { AutoFetchImagePathReturnType } from './Interfaces/AutoFetchReturnTypes/autoFetchReturnInterface';

//UTILS
import './App.css';
import { autoFetch } from './utils/autoFetch';
import { calculateFaceLocation } from './utils/calculateFaceLocation';
import { imageRequestBody } from './Interfaces/FaceRecognition/FaceRecognition_interface';

class App extends Component<object, AppState> {
    state: AppState = {
      input: "", 
      imageURL: "",
      box: [],
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email:"",
        entries: 0,
        joined: ""
      }
    };

  loadUser = (userData:LoadedUser) => {
    this.setState({user: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      entries: userData.entries,
      joined: userData.joined
    }}, () => console.log(this.state.user)) /// TUUUUU 
  }

  onInputChange = (target: HTMLInputElement) => {
    this.setState({input: target.value})
  }

  onButtonSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    this.setState(
      {imageURL: this.state.input, input:"", box:[]},
      () => (document.querySelector("input") as HTMLInputElement).value = ""
    )

    const faceRecoBody:imageRequestBody = {
      id: this.state.user.id,
      imageURL: this.state.input,
    }

    const recognition = await autoFetch<imageRequestBody, AutoFetchImagePathReturnType>("image/", "PUT", faceRecoBody) // {entries: number, fr_response:Array}
    console.log("Reco to:")
    console.log(recognition)
    const arrayOfBoundingObjects = calculateFaceLocation(recognition.fr_response)
    this.setState({box:[...arrayOfBoundingObjects], user: Object.assign(this.state.user, {entries: recognition.entries})})

  }

  onRouteChange = (route:string) => {
    if(route === "signout" || route ==="signin" || route === "register") {
      this.setState({isSignedIn:false})
    } else {
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }

  onUserSignOut = () => {
    this.setState({
      input:"",
      imageURL: "",
      box: [],
      isSignedIn: false,
      user: {
        id:"",
        name:"",
        email:"",
        entries: 0,
        joined: ""
      }
    })
  }


  render():JSX.Element {
    const {isSignedIn, imageURL, route, box } = this.state
    return(
      <div className='App'>
        <ParticlesBg type="custom" bg={true} />       
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} onUserSignOut={this.onUserSignOut}/>
        {this.state.route === "home" ?
        <>
          <Logo />
          <Rank rank={this.state.user.entries} name={this.state.user.name}/>
          <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}/>
            {
              imageURL[0] ? <FaceRecognition box={box}imageURL={imageURL}/> : null
            }
        </>
        :(      
          route === "signin" ?
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
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