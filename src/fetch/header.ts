const header = (bearerToken : string) : Headers => {
    return new Headers({
        'Authorization' : 'Bearer ' + bearerToken,
        'Content-Type' : "application/json"
    })
}

export default header