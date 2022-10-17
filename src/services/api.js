import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotess-api.herokuapp.com"
});
