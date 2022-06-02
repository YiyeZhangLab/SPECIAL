const postData = async (url = '', data = {}) => {
    // Cross-origin posting
    console.log(data);
    try {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    
        return response.json();
    } catch (err) {
        console.log(err);
    }
    return null;
}

window["postData"] = postData;