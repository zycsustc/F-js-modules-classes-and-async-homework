export const getPoetry = async function(){
    let result = "";
    await fetch('https://v1.jinrishici.com/all.json', {
        method: "GET",
        headers: {
            "accept": "text/html"
        },
        credentials: "same-origin"
    }).then(response => {
        return response.text();
    }).then(text => {
        result = text;
    }).catch(err => console.log(err))
    let jsonParse = JSON.parse(result);
    result = [jsonParse.origin, jsonParse.author, jsonParse.content];
    return result;
}
