import API from '../index';

class ContriesService extends API {
  async getAll() {
    return this.get('/all');
  }

  async getCountriesByName(name) {
    return this.get(`/name/${name}`);
  }

  async getCountriesByRegion(region) {
    return this.get(`/region/${region}`);
  }

  async getCountryByCode(code) {
    return this.get(`/alpha/${code}`);
  }
}

export default new ContriesService();
