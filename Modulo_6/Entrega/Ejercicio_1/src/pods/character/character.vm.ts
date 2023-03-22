export interface Character {
  id: string;
  picture: string;
  name: string;
  species: string;
  type: string;
  gender: string;
  status: string;
  location: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  picture: '',
  name: '',
  species: '',
  type: '',
  gender: '',
  status: '',
  location: '',
});
