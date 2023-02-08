import { imageRequestBody } from "../Interfaces/FaceRecognition/FaceRecognition_interface";
import { RegisterRequestBody } from "../Interfaces/State/RegisterState";
import { SignInRequestBody } from "../Interfaces/State/SignInState";

export const autoFetch = async (path:string, method:string, reqBody: RegisterRequestBody | SignInRequestBody | imageRequestBody) => {
    const response = await fetch(`http://localhost:3001/${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
    const data = await response.json();
    console.log(data)
    return data
}