export interface EpisodesEntityApi {
  air_date: string;
  characters: string[];
  created: Date;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface FullEpisodesEntityApi {
  info: InfoEpisodesCollectionApi;
  results: EpisodesEntityApi[];
}

export interface InfoEpisodesCollectionApi {
  count: number;
  next: string;
  pages: number;
  prev: string;
}
