import { FullLocationsEntityApi } from './locations-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/location?page=';

export const getLocationsCollection = async (page: number) => {
  const { data } = await Axios.get<FullLocationsEntityApi>(`${url}${page}`);
  return data;
};