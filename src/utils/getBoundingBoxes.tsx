import React from "react"

//INTERFACES
import { BoundingBoxArrayOfObjects } from "../Interfaces/FaceRecognition/FaceRecognition_interface"

export const getBoundingBoxes = (response:any):BoundingBoxArrayOfObjects | boolean =>{
    const {regions} = response.outputs[0].data
    console.log(regions)
    if(!regions) {
        return false
    }
    const boundingBoxes:BoundingBoxArrayOfObjects = regions.map((el:any) => {
        return el.region_info.bounding_box;
    })
    return boundingBoxes
}