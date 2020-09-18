import API from '../index';

class ContriesService extends API {
  async getAll() {
    return this.get('/all');
  }

  async getCountriesByName(name) {
    return this.get(`/name/${name}`);
  }
}

export default new ContriesService();
