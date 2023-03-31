import * as apiModel from './api';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  picture: character.image,
  name: character.name,
  description: {
    species: character.species,
    type: character.type ? character.type : 'None',
    gender: character.gender,
  },
  status: character.status,
  location: character.location.name,
});
export const mapInfoCharacterFromApiToVm = (
  info: apiModel.InfoCharacterCollectionApi
): viewModel.InfoCharacterCollectionVm => ({
  pages: info.pages,
});
