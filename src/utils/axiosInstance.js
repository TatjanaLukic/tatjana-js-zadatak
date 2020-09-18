import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: "5432dc366f1c4a97bda59bc2e201c2fd",
  },
});

export default axiosInstance;