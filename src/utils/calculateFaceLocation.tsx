import React from "react";
import { BoundingBoxArrayOfObjects } from "../Interfaces/FaceRecognition/FaceRecognition_interface";

export const calculateFaceLocation = (data:BoundingBoxArrayOfObjects[]):BoundingBoxArrayOfObjects[] => {
    const image = document.getElementById("inputimage") as HTMLImageElement
    const width = +image.width
    const height = +image.height
    const arrayOfBoxes:BoundingBoxArrayOfObjects[] = data.map(box => {
      return {
        top_row: box.top_row * height,
        left_col: box.left_col * width,
        right_col: width - (box.right_col * width),
        bottom_row: height - (box.bottom_row * height)
      }
    })
    return arrayOfBoxes
}