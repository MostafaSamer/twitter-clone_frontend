import axios from 'axios';

const baseUrl = 'http://localhost:8000/'

const login = (data)=> {
    console.log(data)
    axios.post(baseUrl + 'user/login', {
        data: data
    })
    .then(res => {
        console.log(res);
    })
}
 
export  {
    login
};