import axios from 'axios';

const baseUrl = 'http://localhost:8000/'

export const login = (data, callback)=> {
    axios.post(baseUrl + 'user/login', {data})
    .then(res=> {
        console.log('API : ', res);
        callback(res.data)
    })
    .catch(res=> {
        // Handle later
    })
}

export const register = (data, callback)=> {
    axios.post(baseUrl + 'user/register', {data})
    .then(res=> {
        callback(res.data)
    })
    .catch(res=> {
        // Handle later
    })
}

export const search = (data, callback)=> {
    axios.post(baseUrl + 'search', {data})
    .then(res=> {
        callback(res.data)
    })
    .catch(res=> {
        // Handle later
    })
}