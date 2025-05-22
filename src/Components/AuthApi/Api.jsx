import axios from "axios";
const BACKEND_URL = "http://192.168.1.52:8000";
window["ngrok-skip-browser-warning"] = true;
const api = axios.create({
  baseURL: "http://192.168.1.52:8000",
});
export const baseUrl = BACKEND_URL;
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");
//     config.headers = {
//       ...config.headers,
//       Authorization: token ? `Bearer ${token.trim()}` : "",
//     };
//     if (config.data instanceof FormData) {
//       config.headers["Content-Type"] = "multipart/form-data";
//     } else {
//       config.headers["Content-Type"] = "application/json";
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
