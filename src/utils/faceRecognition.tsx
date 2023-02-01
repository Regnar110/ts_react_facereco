import _React from "react";

//INTERFACES
import { FaceRecoBody, RequestOptions } from "../Interfaces/FaceRecognition/FaceRecognition_interface"

//UTILLS

import { getBoundingBoxes } from "./getBoundingBoxes";

export const faceRecognition = async (IMAGE_URL:URL) => {
    const MODEL_ID = "face-detection"
    const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5"

    const faceRecoBody:FaceRecoBody = {
        user_app_id: {
            user_id: "qd0dbzhzj8b5",
            app_id: "4c3898a7de1c4ee288743bceb3522aeb"
        },
        inputs: [
            {
                data: {
                    image: {
                        url: IMAGE_URL
                    }
                }
            }
        ]
    };
    
    const requestOptions: RequestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key f8a1d29279af4530bda0c69f0c9de3bb'
        },
        body: JSON.stringify(faceRecoBody)
    };
    
    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    
    const response:Response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/"+ MODEL_VERSION_ID + "/outputs", requestOptions)
    const parseResponse = await response.json()
    return getBoundingBoxes(parseResponse)
}