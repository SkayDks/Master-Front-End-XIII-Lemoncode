import { EpisodeEntityApi } from './episode.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/episode';

export const getEpisode = async (id: string) => {
  const { data } = await Axios.get<EpisodeEntityApi>(`${url}/${id}`);
  return data;
};