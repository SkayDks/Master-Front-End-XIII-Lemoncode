export interface Character {
  id: string;
  bestSentences: string;
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
  bestSentences: '',
  picture: '',
  name: '',
  species: '',
  type: '',
  gender: '',
  status: '',
  location: '',
});

// Experimentar en un futuro
/* 
export interface BestSentences {
  id: string,
  name: string,
  sentence: string,
}
 */
