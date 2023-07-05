import axios, { Axios, AxiosInstance } from "axios";

class StarWarsBaseApi extends Axios {
  private instance: AxiosInstance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api",
      withCredentials: true,
    });
  }

  public getAxiosInstance() {
    return this.instance;
  }
}

export default new StarWarsBaseApi().getAxiosInstance();
