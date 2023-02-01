import _React from "react";

const faceRecognition = (IMAGE_URL:string ) => {
    const MODEL_ID = "45fb9a671625463fa646c3523a3087d5"

    const faceRecoBody = JSON.stringify({
        user_app_id: {
            user_id: "qd0dbzhzj8b5",
            app_id: "4c3898a7de1c4ee288743bceb3522aeb"
        },
        inputs: [
            {
                data: {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key f8a1d29279af4530bda0c69f0c9de3bb'
        },
        body: faceRecoBody
    };
    
    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/"+ "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}