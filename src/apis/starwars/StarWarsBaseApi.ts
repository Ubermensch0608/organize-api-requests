import BaseApi from "../BaseApi";

class StarWarsBaseApi extends BaseApi {
  constructor() {
    super();
    this.setDefaultBaseUrl("https://swapi.dev/api");
  }
}

export default new StarWarsBaseApi().getAxiosInstance();
