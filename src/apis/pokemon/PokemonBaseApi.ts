import BaseApi from "../BaseApi";

class PokemonBaseApi extends BaseApi {
  constructor() {
    super();
    this.setDefaultBaseUrl("https://pokeapi.co/api/v2");
  }
}

export default new PokemonBaseApi().getAxiosInstance();
