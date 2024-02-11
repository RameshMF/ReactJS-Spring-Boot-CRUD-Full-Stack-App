import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/login"; // Adjust the URL accordingly

class LoginService {

loginUser(credentials) {
        return axios.post(LOGIN_API_BASE_URL, credentials);
}

    // Additional methods related to login could be added here
}

export default new LoginService();
