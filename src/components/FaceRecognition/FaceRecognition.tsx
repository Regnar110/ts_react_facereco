import React from "react";

import BoundingBox from "../BoundingBox/BoundingBox";

import { BoundingBoxArrayOfObjects, FaceRecoProps } from "../../Interfaces/FaceRecognition/FaceRecognition_interface";


const FaceRecognition = ({imageURL, box}: FaceRecoProps ) => {
    console.log("MOUNTED")
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageURL} alt="Faces" style={{width:"500px", height:"auto"}}/>
                {
                    box.map((el:BoundingBoxArrayOfObjects) => {
                        return(
                          <BoundingBox top_row={el.top_row} left_col={el.left_col} right_col={el.right_col} bottom_row={el.bottom_row} key={Math.random()}/>  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition