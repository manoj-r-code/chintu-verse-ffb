import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api/auth", // Adjust your backend URL if different
  baseURL: "https://chintu-verse-bff.onrender.com/api/auth", // Adjust your backend URL if different

});

// Add token automatically to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      //   config.headers["Authorization"] = token;
      config.headers["Authorization"] = `Bearer ${token}`;
      // console.log("Attaching token:", `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
