import axios, { Axios, AxiosInstance } from "axios";

class JsonPlaceHolderBaseApi extends Axios {
  public instance: AxiosInstance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
      withCredentials: true,
    });
  }
}

export default new JsonPlaceHolderBaseApi().instance;
