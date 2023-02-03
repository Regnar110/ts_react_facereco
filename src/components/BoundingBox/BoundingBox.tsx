import React from "react";
import './boundingbox.css'
import { BoundingBoxArrayOfObjects } from "../../Interfaces/FaceRecognition/FaceRecognition_interface";

const BoundingBox = ({top_row, left_col, right_col, bottom_row}:BoundingBoxArrayOfObjects) => {
    return(
        <div className="bounding-box"
            style={{
                top:top_row, 
                left:left_col, 
                right:right_col, 
                bottom:bottom_row
            }}>
        </div>
    )
}

export default BoundingBox