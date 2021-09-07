import axios from "axios";

const connection = axios.create({
  baseURL: "https://api.exchangerate.host/",
});

export default connection;
