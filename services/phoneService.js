const API_URL = 'https://63e86417cbdc565873852d8b.mockapi.io/api/products';

export class Service {
  getPhones = async () => {
    try {
      const res = await axios({
        url: API_URL,
        method: 'GET',
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  getPhoneById = async (id) => {
    try {
      const res = await axios({
        url: `${API_URL}/${id}`,
        method: 'GET',
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}
