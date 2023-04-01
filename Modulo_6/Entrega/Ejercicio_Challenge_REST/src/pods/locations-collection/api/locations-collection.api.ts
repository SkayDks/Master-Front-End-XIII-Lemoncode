import { FullLocationsEntityApi } from './locations-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/location?page=';

export const getLocationsCollection = async (page: number, filter: string) => {
  const isFilter = filter ? `&name=${filter}` : '';
  const completeUrl = `${url}${page}${isFilter}`;
  const { data } = await Axios.get<FullLocationsEntityApi>(completeUrl);
  return data;
};
