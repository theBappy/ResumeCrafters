import axios from "axios";

const apiAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default apiAxiosInstance;
