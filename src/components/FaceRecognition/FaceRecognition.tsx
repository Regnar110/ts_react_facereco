import _React from "react";
import { FaceRecoProps } from "../../Interfaces/FaceRecognition/FaceRecognition_interface";

const FaceRecognition = ({imageURL}: FaceRecoProps) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img src={imageURL} alt="Faces" width="500px" height="auto"/>
            </div>
        </div>
    )
}

export default FaceRecognition