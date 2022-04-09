import { useCallback } from 'react';
import axios from 'axios';

const clientsAPI = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api',
});

export const useClients = () => {
  const getClients = useCallback(async () => {
    try {
      const result = await clientsAPI.get('/clients/test');
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addClients = useCallback(async () => {
    try {
      const result = await clientsAPI.post('/clients', {
        name: 'Kinga',
        category: 'event',
        date: '2021-11-20T12:05:45',
        value: 4000,
        alreadyPaid: 100,
        status: 'Completed',
        address: 'Kalisz, czestochowska 69/62',
        info: 'To sa dodatkowe informacje2',
      });
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getClients,
    addClients,
  };
};
