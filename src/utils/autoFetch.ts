
export const autoFetch = async <T, U>(path:string, method:string, reqBody: T):Promise<U> => {
  console.log("jestem")
    const response = await fetch(`http://localhost:3001/${path}`, {
        method: method,
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(reqBody)
    })
    const data:U = await response.json();
    console.log(data)
    return data
}

// https://smartbrain-388809.lm.r.appspot.com