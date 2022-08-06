import axiosInstance from "./httpClientService";

class BaseService {
  public endPoint: string;
  private http: any;

  constructor() {
    this.endPoint = "";
    this.setBaseUrl();
  }
  setBaseUrl() {
    this.http = axiosInstance;
  }

  includeDefault(options: any) {
    let secureLS = {
      access_token: options.token,
    };
    let access_token =
      secureLS && secureLS.access_token ? secureLS.access_token : null;

    const defaultData = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + access_token,
      },
    };
    return Object.assign(defaultData, options);
  }

  get(options = {}) {
    const opts = this.includeDefault(options);

    return this.http.get(this.endPoint, opts);
  }

  post(data: Object, options = {}) {
    const opts = this.includeDefault(options);
    return axiosInstance.post(this.endPoint, data, opts);
  }
  put(data: Object, options = {}) {
    const opts = this.includeDefault(options);

    return this.http.put(this.endPoint, data, opts);
  }
  putOne(id: string, data: Object, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.put(this.endPoint + "/" + id, data, opts);
  }
  delete(id: string, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.delete(this.endPoint + "/" + id, opts);
  }
}

export default BaseService;
