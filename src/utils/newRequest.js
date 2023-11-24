import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-hub.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
