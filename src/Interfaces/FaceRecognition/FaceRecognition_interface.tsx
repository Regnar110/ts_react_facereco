import React from "react"

//getBoundingBox utility return interface

export interface BoundingBoxArrayOfObjects {
    top_row:number;
    left_col:number;
    bottom_row:number;
    right_col:number;
}

//AutoFetch reqBody Interfaces

export interface imageRequestBody {
    id: string,
    imageURL: string,
}

export interface RegisterRequestBody {
    name: string,
    email: string,
    password: string,
}

export interface SignInRequestBody {
    email: string,
    password: string
}

//FaceRecognition COMPONENT

export type FaceRecoProps = {imageURL:string, box: BoundingBoxArrayOfObjects[]} 