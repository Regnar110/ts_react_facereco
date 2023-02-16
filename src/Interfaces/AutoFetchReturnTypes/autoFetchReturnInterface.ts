export interface AutoFetchImagePathReturnType {
    entries: number;
    fr_response: {top_row: number, left_col: number, bottom_row: number, right_col: number}[]
}

export interface AutoFetchSignIn_RegisterReturnType  {
    id: string;
    name: string;
    email: string;
    entries:number;
    joined: "" | Date
}