import axios from 'axios';

const baseUrl = 'http://localhost:8000/'

export const login = (data, callbaack)=> {
    axios.post(baseUrl + 'user/login', {
        data: data
    })
    .then(res=> {
        callbaack(res.data)
    })
    .catch(res=> {
        // Handle later
    })
}

export const register = (data, callback)=> {
    axios.post(baseUrl + 'user/register', {
        data: data
    })
    .then(res=> {
        callback(res)
    })
    .catch(res=> {
        // Handle later
    })
}