import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  picture: character.image,
  name: character.name,
  species: character.species,
  type: character.type ? character.type : 'None',
  gender: character.gender,
  status: character.status,
  location: character.location.name,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterEntityApi =>
  ({
    ...character,
    id: parseInt(character.id),
    image: character.picture,
    name: character.name,
    species: character.species,
    type: character.type,
    gender: character.gender,
    status: character.status,
    location: { name: character.location },
  } as unknown as apiModel.CharacterEntityApi);
