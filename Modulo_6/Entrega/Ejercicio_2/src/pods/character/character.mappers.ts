import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  bestSentences: character.bestSentences,
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
    bestSentences: character.bestSentences,
    image: character.picture,
    name: character.name,
    species: character.species,
    type: character.type,
    gender: character.gender,
    status: character.status,
    location: { name: character.location },
  } as unknown as apiModel.CharacterEntityApi);

// Experimentar en un futuro
/* 
  
const mapBestSentencesFromApiToVm = (
  bestSenteces: apiModel.BestSentences
): viewModel.BestSentences => ({
  id: bestSenteces.id.toString(),
  name: bestSenteces.id.toString(),
  sentence: bestSenteces.sentence,
});

export const mapCollectionBestSentecesFromApiToVm = (
  collectionBestSentences: apiModel.BestSentences[]
): viewModel.BestSentences[] =>
  collectionBestSentences.map((bestSenteces) =>
    mapBestSentencesFromApiToVm(bestSenteces)
  ); */
