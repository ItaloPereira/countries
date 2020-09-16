import API from '../index';

class ContriesService extends API {
  async getAllCountries() {
    return this.get('/all');
  }
}

export default new ContriesService();
