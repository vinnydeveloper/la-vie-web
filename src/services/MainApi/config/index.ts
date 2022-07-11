import axios from "axios";

const baseAPi = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseAPi;
