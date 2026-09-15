import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("/api/v1/auth/generateAccessToken")) {
      return Promise.reject(error);
    }

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Refresh token call
        await axiosInstance.get("/api/v1/auth/generateAccessToken");
        isRefreshing = false;
        
        processQueue(null);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        processQueue(refreshError, null);
        
        const currentPath = window.location.pathname;
        const isAuthPage = currentPath === "/" || currentPath === "/login" || currentPath === "/register";

``        if (!isAuthPage) {
          window.location.href = "/";
        }
        
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);