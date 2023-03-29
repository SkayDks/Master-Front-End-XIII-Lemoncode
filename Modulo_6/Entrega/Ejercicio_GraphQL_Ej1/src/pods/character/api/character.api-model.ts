export interface CharacterEntityApi {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
  gender: string;
  status: string;
  location: {
    name: string;
  };
}

export interface DataCharacter {
  character: CharacterEntityApi;
}
