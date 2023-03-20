export interface CharacterEntityVm {
  id: string;
  picture: string;
  name: string;
  description: {
    species: string;
    type: string;
    gender: string;
  };
  status: string;
  location: string;
}
