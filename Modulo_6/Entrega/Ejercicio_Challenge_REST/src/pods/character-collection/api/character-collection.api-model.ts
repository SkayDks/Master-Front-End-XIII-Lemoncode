export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}


export interface FullCharacterEntityApi {
  info: InfoCharacterCollectionApi;
  results: CharacterEntityApi[];
}

export interface InfoCharacterCollectionApi {
  count: number;
  next: string;
  pages: number;
  prev: string;
}
