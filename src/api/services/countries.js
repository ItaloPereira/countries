import API from '../index';

class ContriesService extends API {
  async getAll() {
    return this.get('/all');
  }
}

export default new ContriesService();
