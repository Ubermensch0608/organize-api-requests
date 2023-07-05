import axios, { AxiosInstance } from "axios";

abstract class BaseApi {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      withCredentials: true,
    });
  }

  public getAxiosInstance() {
    return this.instance;
  }
  public setDefaultBaseUrl(baseUrl: string) {
    this.instance.defaults.baseURL = baseUrl;
  }
}

export default BaseApi;
