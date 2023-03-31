import { FullCharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character/?page=';

export const getCharacterCollection = async (page: number) => {
  const { data } = await Axios.get<FullCharacterEntityApi>(`${url}${page}`);
  return data;
};
