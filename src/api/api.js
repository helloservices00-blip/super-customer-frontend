import axios from "axios";

const API = import.meta.env.VITE_API_URL || "https://super-backend-bzin.onrender.com";

export const customerApi = axios.create({
  baseURL: API,
});
