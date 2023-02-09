
export const autoFetch = async <T, U>(path:string, method:string, reqBody: T):Promise<U> => {
    const response = await fetch(`http://localhost:3001/${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
    const data:U = await response.json();
    return data
}