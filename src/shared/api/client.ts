import axios from "axios";
import { VITE_BASE_API_URL } from '../config/env';
import { ApiError } from '../types';

const apiClient = axios.create({
  baseURL: VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  // In a real app, you would get the token from an auth store
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = {
        status: error.response?.status || 500,
        message: error.response?.data?.message || error.message,
        code: error.response?.data?.code,
        fieldErrors: error.response?.data?.fieldErrors,
      };
      return Promise.reject(apiError);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
