import axios from "axios";

class backendapi {
  hellowordservice() {
return axios.get("http://localhost:8080/");
  }
  
  hellowordPathservice(name) {
    return axios.get(`http://localhost:8080/hello/path-variable/${name}`);
      }

}

export default new backendapi();