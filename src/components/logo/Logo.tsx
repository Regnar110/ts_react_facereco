import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

import "./logo.css"

const Logo:React.FC = () => {
    return(
        <div className="ma4 mt0">
            <Tilt scale={1.05} className="Tilt br2 shadow-2" style={{width: "150px", height: "150px"}}>
                <div className="pa3">
                    <img src={brain} alt="brain_logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;