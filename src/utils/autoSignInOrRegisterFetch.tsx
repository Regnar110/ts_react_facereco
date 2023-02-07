import { RegisterRequestBody } from "../Interfaces/State/RegisterState";
import { SignInRequestBody } from "../Interfaces/State/SignInState";

export const autoSignOrRegisterFetch = async (path:string, method:string, reqBody: RegisterRequestBody | SignInRequestBody) => {
    const response = await fetch(`http://localhost:3001/${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
    const data = await response.json();
    return data
}