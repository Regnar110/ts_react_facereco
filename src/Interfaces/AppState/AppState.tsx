import { BoundingBoxArrayOfObjects } from "../FaceRecognition/FaceRecognition_interface"

export interface AppState {
    input:string
    imageURL: string
    box: BoundingBoxArrayOfObjects[]
    route: string
    isSignedIn: boolean
  }