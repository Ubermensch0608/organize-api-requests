import axios, { AxiosInstance } from "axios";

abstract class BaseApi {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      withCredentials: true,
    });
    this.instance.interceptors.request.use(
      (configs) => {
        configs.headers.Authorization = "USER_AUTH_TOKEN";
        return configs;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (response) => response,
      (err) => {}
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
