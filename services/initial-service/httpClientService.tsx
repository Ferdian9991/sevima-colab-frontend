import axios from "axios";
import Router from "next/router";
import { throttleAdapterEnhancer } from "axios-extensions/lib";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000 * (60 * 3),
  adapter: throttleAdapterEnhancer(axios.defaults.adapter!),
});

axiosInstance.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error: any) {
    if (!error.response) {
      return;
    }

    if (error.response.status == 401) {
      window.localStorage.clear();
      return Router.replace("/login");
    }
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
