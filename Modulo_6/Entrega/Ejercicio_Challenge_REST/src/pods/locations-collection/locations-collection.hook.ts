import React from 'react';
import {
  LocationsEntityVm,
  InfoLocationsCollectionVm,
} from './locations-collection.vm';
import { getLocationsCollection } from './api';
import {
  mapLocationsFromApiToVm,
  mapInfoLocationsFromApiToVm,
} from './locations-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useLocationsCollection = () => {
  const [locationsCollection, setLocationsCollection] = React.useState<
    LocationsEntityVm[]
  >([]);

  const [infoCollection, setInfoColletion] =
    React.useState<InfoLocationsCollectionVm>({ pages: 1 });

  const loadLocationsCollection = (page: number, filter?: string) => {
    getLocationsCollection(page, filter).then((data) => {
      setLocationsCollection(
        mapToCollection(data.results, mapLocationsFromApiToVm)
      );
      setInfoColletion(mapInfoLocationsFromApiToVm(data.info));
    });
  };
  return { locationsCollection, infoCollection, loadLocationsCollection };
};
