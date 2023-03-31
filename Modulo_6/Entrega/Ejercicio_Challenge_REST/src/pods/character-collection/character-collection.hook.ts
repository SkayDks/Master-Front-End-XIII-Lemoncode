import * as React from 'react';
import {
  CharacterEntityVm,
  InfoCharacterCollectionVm,
} from './character-collection.vm';
import { getCharacterCollection, InfoCharacterCollectionApi } from './api';
import {
  mapCharacterFromApiToVm,
  mapInfoCharacterFromApiToVm,
} from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const [infoCollection, setInfoColletion] =
    React.useState<InfoCharacterCollectionVm>({ pages: 1 });

  const loadCharacterCollection = (page: number) => {
    getCharacterCollection(page).then((data) => {
      setCharacterCollection(
        mapToCollection(data.results, mapCharacterFromApiToVm)
      );
      setInfoColletion(mapInfoCharacterFromApiToVm(data.info));
    });
  };
  return { characterCollection, infoCollection, loadCharacterCollection };
};
