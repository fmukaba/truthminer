import axios from 'axios';

const API_URL  = '';
const BASE_URL = `${API_URL}`;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

const ApiService = {
  get: async (url: string, data?: any, force?: boolean) => {
    if (force) {
      const resp = await axios.get(url, data);
      return resp.data;
    }
    const resp = await axiosClient.get(url, data);
    return resp.data;
  },
  post: async (url: string, data?: any, force?: boolean) => {
    if (force) {
      const resp = await axios.post(url, data);
      return resp.data;
    }
    const resp = await axiosClient.post(url, data);
    return resp.data;
  },
  put: async (url: string, data?: any, force?: boolean) => {
    if (force) {
      const resp = await axios.put(url, data);
      return resp.data;
    }
    const resp = await axiosClient.put(url, data);
    return resp.data;
  },
  delete: async (url: string, data?: any, force?: boolean) => {
    if (force) {
      const resp = await axios.delete(url, data);
      return resp.data;
    }
    const resp = await axiosClient.delete(url, data);
    return resp.data;
  },
};
export default ApiService;
