import React from "react";
//INTERFACES

import {ImageLinkFormProps} from '../../Interfaces/ImageLinkForm/ImageLinkFormProps'

import './imagelinkform.css'

const ImageLinkForm:React.FC<ImageLinkFormProps> = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className="f3 center">
                {`This Magic Brain will detect faces in your pictures!`}
                <br/>
                {`Paste image url with jpg, jpeg, png etc. at the end and click "Detect"!`}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" onChange={(event)=>onInputChange(event.target)}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={(event) => onButtonSubmit(event)}>
                        Detect
                    </button>
                </div>
            </div>            
        </div>

    )
}

export default ImageLinkForm;