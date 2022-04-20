// axios
import axios from "axios";

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_API_HOST,
  },
});

export default axiosIns;
