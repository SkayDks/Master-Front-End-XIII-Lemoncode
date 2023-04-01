import { FullCharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character/?page=';

export const getCharacterCollection = async (page: number, filter:string) => {
  const isFilter = filter ? `&name=${filter}` : ''; 
  const completeUrl = `${url}${page}${isFilter}`;
  const { data } = await Axios.get<FullCharacterEntityApi>(completeUrl);
  return data;
};
