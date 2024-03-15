import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const setAuthorizationTokenToTheRequestHeaders = (token: string) => {
  axiosInstance.interceptors.request.use((config) => {
    console.log("set token", token);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
