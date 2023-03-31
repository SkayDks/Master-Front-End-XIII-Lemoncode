import * as apiModel from './api';
import * as viewModel from './locations-collection.vm';

export const mapLocationsFromApiToVm = (
  locations: apiModel.LocationsEntityApi
): viewModel.LocationsEntityVm => ({
  id: locations.id.toString(),
  name: locations.name,
  type: locations.type,
  dimension: locations.dimension,
});

export const mapInfoLocationsFromApiToVm = (
  info: apiModel.InfoLocationsCollectionApi
): viewModel.InfoLocationsCollectionVm => ({
  pages: info.pages,
});
