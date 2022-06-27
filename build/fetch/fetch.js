"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST_FETCH = exports.GET_FETCH = void 0;
const GET_FETCH = (url, bearerToken) => {
    console.log(url, bearerToken);
    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + bearerToken,
            'Content-Type': "application/json"
        })
    })
        .then(res => res.json())
        .catch(err => new Promise((resolve, reject) => reject(err)));
};
exports.GET_FETCH = GET_FETCH;
const POST_FETCH = (url, bearerToken, body) => {
    return fetch(url, {
        method: 'POST',
        body: body,
        headers: new Headers({
            'Authorization': 'Bearer ' + bearerToken,
            'Content-Type': "application/json"
        })
    })
        .then(res => res.json())
        .catch(err => new Promise((resolve, reject) => reject(err)));
};
exports.POST_FETCH = POST_FETCH;
module.exports = { GET_FETCH: exports.GET_FETCH, POST_FETCH: exports.POST_FETCH };
