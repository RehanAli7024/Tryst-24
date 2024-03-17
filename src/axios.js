import axios from 'axios';
import { DOMAIN } from './domain';

const instance = axios.create();

instance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh_token');
            return instance.post(`${DOMAIN}token/refresh/`, {
                refresh
                    : refreshToken
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        localStorage.setItem('access_token', res.data.access);
                        console.log(res.data.access);
                        instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access;
                        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access;
                        return instance(originalRequest);
                    }
                })
                .catch(err => {
                    alert(err.response);
                    console.log(err);
                });
        }
        return Promise.reject(error);
    }
);

export default instance;