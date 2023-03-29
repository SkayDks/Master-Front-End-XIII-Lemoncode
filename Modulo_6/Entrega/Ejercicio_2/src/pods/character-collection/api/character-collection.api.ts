//import { FullCharacterEntityApi } from './character-collection.api-model';

import Axios from 'axios';
import { CharacterEntityApi } from 'pods/character/api';

const url = '/api/character';

export const getCharacterCollection = async () => {
  const { data } = await Axios.get<CharacterEntityApi[]>(url);
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // await Axios.delete<CharacterEntityApi>(`${url}/${id}`)
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
