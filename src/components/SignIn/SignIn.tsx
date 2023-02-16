import React, {Component} from "react";
import { SignInState, SignInProps } from "../../Interfaces/State/SignInState";
import { autoFetch } from "../../utils/autoFetch";
import { SignInRequestBody } from "../../Interfaces/FaceRecognition/FaceRecognition_interface";
import { AutoFetchSignIn_RegisterReturnType } from "../../Interfaces/AutoFetchReturnTypes/autoFetchReturnInterface";

class SignIn extends Component<SignInProps, SignInState> {
    state: SignInState = {
        signInEmail: "",
        signInPassword: ""
    }

    onEmailChange = (target:HTMLInputElement) => {
        this.setState({signInEmail: target.value})
    }

    onPasswordChange = (target:HTMLInputElement) => {
        this.setState({signInPassword: target.value})
    }

    onSubmitSignIn = async () => {
        const reqBody: SignInRequestBody = {
            email: this.state.signInEmail,
            password:this.state.signInPassword
        }
        const user = await autoFetch<SignInRequestBody, AutoFetchSignIn_RegisterReturnType>("signin/", "POST", reqBody )
        if(typeof user === "object") {
            console.log(user)
            this.props.loadUser(user)
            this.props.onRouteChange("home")
        } 
    }
 
 render() {
    const { onRouteChange }  = this.props
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            onChange={(event) => this.onEmailChange(event.target)} 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            onChange={(event) => this.onPasswordChange(event.target)}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                        />
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit" value="Sign in"
                        onClick={this.onSubmitSignIn}

                    />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={()=>onRouteChange("register")} className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>        
    )
 }
}

export default SignIn