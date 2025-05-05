import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Set in your .env file
    headers: {
        "Content-Type": "application/json",
    },
});
  
export default api;