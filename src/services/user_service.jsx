import axios from "axios";
const API = "http://localhost:5243/api/User"; // .NET : /api/User

export const UsersService = {
  async getAll() {
    const { data } = await axios.get(API);
    return data; // attendu: [{id, firstName, lastName, email}, ...]
  },

  async getById(id) {
    const { data } = await  axios.get(`${API}/${id}`);
    return data;
  },

  async create(payload) {
    // payload: { firstName, lastName, email }
    const { data } = await axios.post(API, payload);
    return data; // renvoie l'utilisateur créé
  },

  async update(id, payload) {
    const { data } = await axios.put(`${API}/${id}`, payload);
    return data;
  },

  async remove(id) {
    await axios.delete(`${API}/${id}`);
  },
};
