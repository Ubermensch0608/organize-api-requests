import BaseApi from "../BaseApi";

class JsonPlaceHolderBaseApi extends BaseApi {
  constructor() {
    super();
    this.setDefaultBaseUrl("https://jsonplaceholder.typicode.com");
  }
}

export default JsonPlaceHolderBaseApi;
