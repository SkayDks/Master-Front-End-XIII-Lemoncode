export interface LocationsEntityApi {
  id: number;
  name: string;
  residents: string[];
  url: string;
  type: string;
  created: Date;
  dimension: string;
}

export interface FullLocationsEntityApi {
  info: InfoLocationsCollectionApi;
  results: LocationsEntityApi[];
}

export interface InfoLocationsCollectionApi {
  count: number;
  next: string;
  pages: number;
  prev: string;
}
