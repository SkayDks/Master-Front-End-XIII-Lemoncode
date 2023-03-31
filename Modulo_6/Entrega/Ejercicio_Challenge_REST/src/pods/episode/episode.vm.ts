export interface Episode {
  id: string;
  name: string;
  episode: string;
  season: string;
  airDate: string;
}

export const createEmptyEpisode = (): Episode => ({
  id: '',
  name: '',
  episode: '',
  season: '',
  airDate: '',
});
