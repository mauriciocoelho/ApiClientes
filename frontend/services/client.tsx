import api from './api';

export const getClientAll = () => {
  return api.get(`clients`);
};

export const addClient = (data: any) => {
  return api.post(`clients`, data);
};

export const deleteClient = (id: any) => {
  return api.delete(`clients/${id}`);
};
