import { url } from "inspector";
import { House } from "../models/House";
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = '/data';

const baseAxios = axios.create({
    baseURL: BASE_URL
});

const api = (() => {
    const get = (url: string, config?: AxiosRequestConfig<any> | undefined) => baseAxios.get(url, config);

    return { get };
})();

export default api;
