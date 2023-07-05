import axios, { Axios, AxiosInstance } from "axios";

class StarWarsBaseApi extends Axios {
  public instance: AxiosInstance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "https://swapi.dev/api",
      withCredentials: true,
    });
  }
}

export default new StarWarsBaseApi().instance;
