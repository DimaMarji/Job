// class that generate API requests for a service

import ApiService from "../../../BaseApi/api-service";

import config from "../../Config";

class Service1 extends ApiService {
    constructor() {
        super({baseURL: config.baseUrl, headers: config.headers});
    }
}

const service1 = new Service1();
export default service1;
