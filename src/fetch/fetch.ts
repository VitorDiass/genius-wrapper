import header from './header';

export const GET_FETCH = (url : string, bearerToken : string, params: string = '') => {
    const url_params = url + (params && '?' + params);
    console.log(url_params);
    return fetch(url_params, {
        method: 'GET',
        headers : header(bearerToken)
    })
    .then(res => res.json())
    .catch(err => new Promise((resolve, reject) => reject(err)))
}


export const POST_FETCH = (url : string, bearerToken : string, body : any) => {
    return fetch(url, {
        method: 'POST',
        body : body,
        headers : header(bearerToken)
    })
    .then(res => res.json())
    .catch(err => new Promise((resolve, reject) => reject(err)))
}


module.exports = { GET_FETCH, POST_FETCH }