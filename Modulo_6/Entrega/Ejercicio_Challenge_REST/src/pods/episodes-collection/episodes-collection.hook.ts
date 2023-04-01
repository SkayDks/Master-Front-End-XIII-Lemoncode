import React from 'react';
import {
  EpisodesEntityVm,
  InfoEpisodesCollectionVm,
} from './episodes-collection.vm';
import { getEpisodesCollection } from './api';
import {
  mapEpisodesFromApiToVm,
  mapInfoEpisodesFromApiToVm,
} from './episodes-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodesCollection = () => {
  const [episodesCollection, setEpisodesCollection] = React.useState<
    EpisodesEntityVm[]
  >([]);

  const [infoCollection, setInfoColletion] =
    React.useState<InfoEpisodesCollectionVm>({ pages: 1 });

  const loadEpisodesCollection = (page: number, filter?: string) => {
    getEpisodesCollection(page, filter).then((data) => {
      setEpisodesCollection(
        mapToCollection(data.results, mapEpisodesFromApiToVm)
      );
      setInfoColletion(mapInfoEpisodesFromApiToVm(data.info));
    });
  };
  return { episodesCollection, infoCollection, loadEpisodesCollection };
};
