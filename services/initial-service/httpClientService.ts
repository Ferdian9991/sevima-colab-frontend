import axios from "axios";
import { toast } from "react-toastify/dist";
import Router from "next/router";
import "react-toastify/dist/ReactToastify.min.css";
import { throttleAdapterEnhancer } from "axios-extensions/lib";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000 * (60 * 3),
  adapter: throttleAdapterEnhancer(axios.defaults.adapter!),
});

axiosInstance.interceptors.response.use(
  function (response) {
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
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

const buildErrorMessage = (error: any) => {
  let message: any = "";
  if (error.response.data) {
    if (error.response.status === 422) {
      message = error.response.data.data;
    } else if (
      error.response.data.data &&
      error.response.data.data.length > 0
    ) {
      message = error.response.data.data;
    } else if (error.response.data.values) {
      message = error.response.data.values;
    } else {
      message = error.response.data.message;
    }
  }
  let flashMessage: any = [];

  if (typeof message === "object") {
    for (let err of Object.keys(message)) {
      if (message[err].length > 0) {
        flashMessage.push(message[err][0]);
      } else {
        flashMessage.push(message[err]);
      }
    }
  } else {
    flashMessage = message;
  }

  if (Array.isArray(flashMessage) && flashMessage.length > 0) {
    flashMessage = flashMessage.join("<br/>");
  } else {
    flashMessage = flashMessage;
  }
  return flashMessage;
};

export default axiosInstance;
