import { FullEpisodesEntityApi } from './episodes-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/episode?page=';

export const getEpisodesCollection = async (page: number, filter: string) => {
  const isFilter = filter ? `&name=${filter}` : '';
  const completeUrl = `${url}${page}${isFilter}`;
  const { data } = await Axios.get<FullEpisodesEntityApi>(completeUrl);
  return data;
};
