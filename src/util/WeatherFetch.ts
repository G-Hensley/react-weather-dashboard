import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    method: 'GET',
    params: {
        appid: API_KEY,
    },
    timeout: 5000,
    responseType: 'json',
})

export default api;
