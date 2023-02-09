import React, {Component} from "react";
import { RegisterProps, RegisterState } from "../../Interfaces/State/RegisterState";
import { autoFetch } from "../../utils/autoFetch";
import { RegisterRequestBody } from "../../Interfaces/FaceRecognition/FaceRecognition_interface";
import { AutoFetchSignIn_RegisterReturnType } from "../../Interfaces/AutoFetchReturnTypes/autoFetchReturnInterface";

class Register extends Component<RegisterProps, RegisterState> {
    state: RegisterState = {
        registerName: "",
        registerEmail: "",
        registerPassword: ""
    }

    onNameChange = (target:HTMLInputElement) => {
        this.setState({registerName:target.value})
    }

    onEmailChange = (target:HTMLInputElement) => {
        this.setState({registerEmail: target.value})
    }

    onPasswordChange = (target:HTMLInputElement) => {
        this.setState({registerPassword: target.value})
    }

    onRegister = async () => {
        const reqBody:RegisterRequestBody = {
            name: this.state.registerName,
            email: this.state.registerEmail,
            password:this.state.registerPassword
        }

        const user = await autoFetch<RegisterRequestBody, AutoFetchSignIn_RegisterReturnType>("register/", "POST", reqBody)
        console.log(user)
        this.props.loadUser(user)
        this.props.onRouteChange("home")
    }

    render() {
        return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            onChange={event => this.onNameChange(event.target)}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            onChange={event => this.onEmailChange(event.target)}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            onChange={event => this.onPasswordChange(event.target)}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                        />
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="tc b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="text" value="Register"
                        onClick={this.onRegister}
                    />
                    </div>
                </div>
            </main>
        </article>            
        )
    }
}
export default Register;