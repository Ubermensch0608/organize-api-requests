import BaseApi from "./BaseApi";

class MswApi extends BaseApi {
  constructor() {
    super();
  }
}

export default new MswApi().getAxiosInstance();
