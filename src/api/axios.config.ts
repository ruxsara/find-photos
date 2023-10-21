import axios, { AxiosRequestConfig } from "axios";

const defaultConfig: AxiosRequestConfig = {
  baseURL: "https://api.unsplash.com/search/",
  headers: {
    Authorization: "Client-ID 7sbivZC5L9heziLYo2EWZ07C2h00zoRdlsXR0_7UQPE",
  },
  params: {
    query: "",
  },
};

export const axiosInstance = axios.create(defaultConfig);
