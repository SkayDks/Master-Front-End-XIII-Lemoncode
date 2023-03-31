import { FullEpisodesEntityApi } from './episodes-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/episode?page=';

export const getEpisodesCollection = async (page: number) => {
  const { data } = await Axios.get<FullEpisodesEntityApi>(`${url}${page}`);
  return data;
};

