import axios from 'axios';
import queryString from 'query-string';
import { getAccessToken, removeAccessToken } from 'utils/token';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'content-type': 'application/json' },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(function (config) {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log('🚀 ~ file: axios-client.ts:29 ~ error:', error);
    // const { code, message } = error.response.data;
    // if (code === 401) {
    //   console.log(message);
    //   removeAccessToken();
    // }
    // throw error;
  }
);

export default axiosClient;
