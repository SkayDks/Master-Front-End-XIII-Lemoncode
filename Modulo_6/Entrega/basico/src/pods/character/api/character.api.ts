import { CharacterEntityApi } from './character.api-model';
import { Lookup } from 'common/models';
import { mockStatus } from './character.mock-data';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getcharacter = async (id: string) => {
  const { data } = await Axios.get<CharacterEntityApi>(`${url}/${id}`);
  return data;
};

export const getStatus = async (): Promise<Lookup[]> => {
  return mockStatus;
};

export const savecharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  return true;
};
