import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://my-web-service-dwf8.onrender.com/api",
});

export default ncnewsApi;
