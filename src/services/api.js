import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reinanstack-backend.herokuapp.com'
});

export default api;