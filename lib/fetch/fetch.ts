export const GET_FETCH = (url : string, bearerToken : string) => {
    console.log(url, bearerToken)
    return fetch(url, {
        method: 'GET',
        headers : new Headers({
            'Authorization' : 'Bearer ' + bearerToken,
            'Content-Type' : "application/json"
        })
    })
    .then(res => res.json())
    .catch(err => new Promise((resolve, reject) => reject(err)))
}

export const POST_FETCH = (url : string, bearerToken : string, body : any) => {
    return fetch(url, {
        method: 'POST',
        body : body,
        headers : new Headers({
            'Authorization' : 'Bearer ' + bearerToken,
            'Content-Type' : "application/json"
        })
    })
    .then(res => res.json())
    .catch(err => new Promise((resolve, reject) => reject(err)))
}


module.exports = { GET_FETCH, POST_FETCH }