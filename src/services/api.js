import axios from 'axios';

const API_URL = 'http://localhost:8000';

class Api {

  constructor() {
    this.axiosWithToken = token => axios.create({
      baseURL: API_URL,
      headers: { 'Authorization':'Bearer '+ token, 'Content-Type': 'application/json' }
    });

    this.headerJSON = { headers: { 'Content-Type': 'application/json' } };
  }

  async getAllUsers(token) {
    try {
      const response = await axiosWithToken(token).get('/users');
      return response;
    } catch (error) {
      return error;
    }
  }

  async login(body) {
    try {
      const response = await axios.post(`${API_URL}/login`, body, this.headerJSON);
      return response;
    } catch (error) {
      return error;
    }
  }

}

export default new Api();
