import { BoundingBoxArrayOfObjects } from "../FaceRecognition/FaceRecognition_interface"

export interface LoadedUser {
  id:string,
  name:string,
  email:string,
  entries:number,
  joined: Date | ""
}

export interface AppState {
    input:string
    imageURL: string
    box: BoundingBoxArrayOfObjects[]
    route: string
    isSignedIn: boolean
    user: LoadedUser
  }