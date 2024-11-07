import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
});

// const token = "dsfiuag89rehjbv";

// request interceptor

// api.interceptors.request.use(
//   (config) => {
//     config.headers["powerByTanvir"] = "bisskut " + token;
//     console.log(config.headers);
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response) {
      err.message = `Error from server : status ${err.response.status}`;
    }
    return Promise.reject(err);
  }
);

export default api;
