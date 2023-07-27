import axios from "axios";
import env from '../env.config'

const axiosInstance = axios.create({
  baseURL: env.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'private-key': env["private-key"],
  },
});

export default axiosInstance;