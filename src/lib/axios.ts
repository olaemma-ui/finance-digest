import axios from "axios";

//
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

//
axiosInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        token: process.env.NEXT_PUBLIC_FINNHUB_API_KEY,
    };
    return config;
});

export default axiosInstance;
