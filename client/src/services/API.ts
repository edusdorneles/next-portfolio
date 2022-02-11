import Axios from "axios";

export const api = Axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Baerer ${localStorage.getItem("auth-token")}`,
  },
});

// Set the auth token for any request
const authToken = localStorage.getItem("auth-token");
Axios.defaults.headers.common["Authorization"] = `Baerer ${authToken}`;
