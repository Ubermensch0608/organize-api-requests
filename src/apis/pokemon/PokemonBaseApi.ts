import axios, { Axios, AxiosInstance } from "axios";

class PokemonBaseApi extends Axios {
  public instance: AxiosInstance;

  constructor() {
    super();
    this.instance = axios.create({
      baseURL: "https://pokeapi.co/api/v2",
      withCredentials: true,
    });
  }
}

export default PokemonBaseApi;
