import { LocationEntityApi } from './location.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/location';

export const getLocation = async (id: string) => {
  const { data } = await Axios.get<LocationEntityApi>(`${url}/${id}`);
  return data;
};