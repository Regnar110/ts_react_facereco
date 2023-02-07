import React from "react"

//FaceRecognition UTILITY FUNCTION

export interface FaceRecoBody {
    user_app_id: {
        user_id: string,
        app_id: string,
    },
    inputs: [
        {
            data: {
                image: {
                    url: URL
                }
            }
        }
    ]
}

export interface RequestOptions {
    method: string,
    headers: {
        Accept: string,
        Authorization: string
    },
    body: string
};

//getBoundingBox utility return interface

export interface BoundingBoxArrayOfObjects {
    top_row:number;
    left_col:number;
    bottom_row:number;
    right_col:number;
}

//AutoFetch reqBody Interface 

export interface imageRequestBody {
    id: string,
    imageURL: string,
}

//FaceRecognition COMPONENT

export type FaceRecoProps = {imageURL:string, box: BoundingBoxArrayOfObjects[]} 