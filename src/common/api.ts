import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:5000/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_URL}`,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
