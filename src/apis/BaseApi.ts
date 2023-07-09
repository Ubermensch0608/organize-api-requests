import axios, { AxiosError, AxiosInstance } from "axios";
import { getCookie } from "src/utils/cookie";

abstract class BaseApi {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      withCredentials: true,
    });
    this.instance.interceptors.request.use(
      (configs) => {
        const accessToken = getCookie("accessToken");
        if (accessToken) {
          configs.headers.Authorization = accessToken;
        }
        return configs;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (response) => response,
      (err: AxiosError) => {
        console.log(err);
        if (err.response?.status !== 401) {
          return Promise.reject(err);
        }
        if (err.response.status === 401) {
          console.log("Auth Error");
        }
      }
    );
  }

  public getAxiosInstance() {
    return this.instance;
  }
  public setDefaultBaseUrl(baseUrl: string) {
    this.instance.defaults.baseURL = baseUrl;
  }
}

export default BaseApi;
