
export const autoFetch = async <T, U>(path:string, method:string, reqBody: T):Promise<U> => {
    const response = await fetch(`https://smartbrain-377721.lm.r.appspot.com/${path}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
    const data:U = await response.json();
    return data
}