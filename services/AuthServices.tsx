import BaseService from "./initial-service/axios";

class AuthService extends BaseService {
  login(payload: Object) {
    this.endPoint = "/login";
    return this.post(payload);
  }
  register(payload: Object) {
    this.endPoint = "/register";
    return this.post(payload);
  }
}

export default new AuthService();
