import axios, { Axios, AxiosInstance } from "axios";

class JsonPlaceHolderBaseApi extends Axios {
  private instance: AxiosInstance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
      withCredentials: true,
    });
  }

  public getAxiosInstance() {
    return this.instance;
  }
}

export default new JsonPlaceHolderBaseApi().getAxiosInstance();
