import axios from 'axios';

const api = axios.create({
    baseURL: 'https://stipulate-calzone-twice.ngrok-free.dev',
    headers: {
        'Content-Type': 'application/json'
    } 
});

export default api;