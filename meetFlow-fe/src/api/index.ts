import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const createEvent = async (name: string) => {
  return axios.post(`${API_URL}/events/`, { name });
};

export const getEvent = async (id: string) => {
  return axios.get(`${API_URL}/events/${id}/`);
};
