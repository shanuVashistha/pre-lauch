import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'your_link_here',
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = 'your_token_here';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;