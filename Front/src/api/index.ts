import axios from 'axios';

const authenticatedApi = axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    }
});

export default authenticatedApi;