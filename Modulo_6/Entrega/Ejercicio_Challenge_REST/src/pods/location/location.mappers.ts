import * as apiModel from './api/location.api-model';
import * as viewModel from './location.vm';

export const mapLocationFromApiToVm = (
  locations: apiModel.LocationEntityApi
): viewModel.Location => ({
  id: locations.id.toString(),
  name: locations.name,
  type: locations.type,
  dimension: locations.dimension,
});