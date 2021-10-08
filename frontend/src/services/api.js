import axios from "axios";

const api = axios.create({
  headers: {
    accept: "*/*",
    "Content-Type": "application/json-patch+json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://osponto.azurewebsites.net/api/v1/" //process.env.REACT_APP_API,
});

export default api;
