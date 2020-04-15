import axios from 'axios';

const api = axios.create({
    baseURL: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick'
});

export default api;