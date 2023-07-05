import axios, { Axios, AxiosInstance } from "axios";

class PokemonBaseApi extends Axios {
  private instance: AxiosInstance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "https://pokeapi.co/api/v2",
      withCredentials: true,
    });
  }

  public getAxiosInstance() {
    return this.instance;
  }
}

export default new PokemonBaseApi().getAxiosInstance();
