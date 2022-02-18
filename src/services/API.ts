import Axios from "axios";

export const api = Axios.create({
  baseURL: import.meta.env.VITE_HOST,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Baerer ${localStorage.getItem("auth-token")}`,
  },
});

// Set the auth token for any request
const authToken = localStorage.getItem("auth-token");
Axios.defaults.headers.common["Authorization"] = `Baerer ${authToken}`;
