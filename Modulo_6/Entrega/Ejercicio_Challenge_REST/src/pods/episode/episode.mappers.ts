import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = (
  episodes: apiModel.EpisodeEntityApi
): viewModel.Episode => ({
  id: episodes.id.toString(),
  name: episodes.name,
  episode: mapEpisode(episodes.episode),
  season: mapSeason(episodes.episode),
  airDate: episodes.air_date,
});

const mapEpisode = (episode: string) => episode.slice(1, 3);

const mapSeason = (season: string) => season.slice(4);
