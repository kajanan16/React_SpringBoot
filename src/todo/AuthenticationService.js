import axios from "axios";

class AutenticationService {
  registerSuccessfullLogin(userName, password) {
    let basicAuthHeader = "Basic " + window.btoa(userName + ":" + password);
    sessionStorage.setItem("autenticatedUser", userName);
    this.setupAxiosInteceptors(basicAuthHeader);
  }

  logout() {
    sessionStorage.removeItem("autenticatedUser");
  }

  isUserLogin() {
    let user = sessionStorage.getItem("autenticatedUser");
    if (user !== "kajanan") {
      return false;
    }
    return true;
  }

  accessUserName() {
    let username = sessionStorage.getItem("autenticatedUser");
    return username;
  }

  setupAxiosInteceptors(basicAuthHeader) {
    axios.interceptors.request.use(config => {
      if (this.isUserLogin()) 
      {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AutenticationService();
