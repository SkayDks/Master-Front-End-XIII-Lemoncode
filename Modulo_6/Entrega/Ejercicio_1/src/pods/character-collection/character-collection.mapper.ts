import * as apiModel from 'pods/character/api';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  picture: character.image,
  name: character.name,
  description: {
    species: character.species,
    type: character.type ? character.type : "None",
    gender: character.gender,
  },
  status: character.status,
  location: character.location.name,
});
