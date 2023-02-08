import React from "react";
import "./navigation.css"

interface NavigationProps { 
    onRouteChange(route:string):void;
    isSignedIn:boolean
    onUserSignOut():void
}
const Navigation = ({onRouteChange, isSignedIn, onUserSignOut}:NavigationProps) => {
    if(isSignedIn) {
        return(
            <nav>
                <p onClick={()=>{onRouteChange("signin"); onUserSignOut()}}className="f3 link dim black underline pa3 pointer">Sign Out</p>
            </nav>                 
        )

    } else {
        return(
            <nav>
                <p onClick={()=>onRouteChange("register")}className="f3 link dim black underline pa3 pointer">Register</p>
                <p onClick={()=>onRouteChange("signin")}className="f3 link dim black underline pa3 pointer">Sign In</p>                   
            </nav>                
        )

    }
}

export default Navigation