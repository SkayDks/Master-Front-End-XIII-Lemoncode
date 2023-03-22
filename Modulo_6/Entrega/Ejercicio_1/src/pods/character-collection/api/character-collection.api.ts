import { FullCharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async () => {
  const { data } = await Axios.get<FullCharacterEntityApi>(url);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
