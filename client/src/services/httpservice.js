// the class file containing
// conde for HTTP Calls
import axios from 'axios';
class HttpService {
    constructor() {
        this.url = 'http://localhost:6070/api/students'        
    }
    getStudents() {
        let response = axios.get(this.url);
        return response;
    }
}

export default HttpService;