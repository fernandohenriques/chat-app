import axios from 'axios';

const API_URL = 'http://localhost:8000';

class Api {

  constructor() {
    this.axiosWithToken = token => axios.create({
      baseURL: API_URL,
      headers: { 'Authorization':'Bearer '+ token, 'Content-Type': 'application/json' },
    });

    this.headerJSON = { headers: { 'Content-Type': 'application/json' } };
  }

  async getAllUsers(token) {
    const { axiosWithToken } = this;

    try {
      const response = await axiosWithToken(token).get('/users');
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async login(body) {
    const { headerJSON } = this;

    try {
      const response = await axios.post(`${API_URL}/login`, body, headerJSON);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async createUser(body) {
    const { headerJSON } = this;

    try {
      const response = await axios.post(`${API_URL}/users`, body, headerJSON);
      return response.data;
    } catch (error) {
      return error;
    }
  }

}

export default new Api();
