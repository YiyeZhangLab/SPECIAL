// 1. generate the access token from gcp
const auth_url = "https://oauth2.googleapis.com/token";

// 2. send the parsed input variables to gcp and get the inference result
const gcp_api_url = "https://us-east4-ml.googleapis.com/v1/projects/green-orb-361713/models/special/versions/prob:predict";


const postData = async (item = {}) => {
    // Cross-origin posting
    // console.log(item);
    try {
        let token = await fetch(auth_url, {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client_id: "103842626755-63qfndcq4di4m6a5ov4tnkb36h22nhj1.apps.googleusercontent.com",
                client_secret: "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",
                refresh_token: "1//04ILOfR3XzgrpCgYIARAAGAQSNwF-L9IriuPrrV52eb0h6pPooXE6ZaZaXkAs4pf9fOcB25xUpE_c-xPaTYUnTKfAr34vS8Ai1tY",
                grant_type: "refresh_token"
            })
          });
        token = await token.json();
        token = token.access_token;
        console.log("Bearer " + token);


        let result = "";




        await fetch(gcp_api_url, {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            "Authorization":"Bearer "+token,
            },
            body: JSON.stringify(item)
        }) .then(response => response.text())
            .then(data => {
            console.log(data);
            result = data;}
            );
        console.log(result);
    
        return result;
    } catch (err) {
        console.log(err);
    }
    return null;
}

export default postData;