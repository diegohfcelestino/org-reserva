import axios from "axios";

const api = axios.create({
  headers: {
    accept: "*/*",
    "Content-Type": "application/json-patch+json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: process.env.REACT_APP_API,
});

export default api;
