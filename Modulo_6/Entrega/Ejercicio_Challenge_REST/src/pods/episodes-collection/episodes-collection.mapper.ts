import * as apiModel from './api';
import * as viewModel from './episodes-collection.vm';

export const mapEpisodesFromApiToVm = (
  episodes: apiModel.EpisodesEntityApi
): viewModel.EpisodesEntityVm => ({
  id: episodes.id.toString(),
  name: episodes.name,
  episode: mapEpisode(episodes.episode),
  season: mapSeason(episodes.episode),
  airDate: episodes.air_date,
});

export const mapInfoEpisodesFromApiToVm = (
  info: apiModel.InfoEpisodesCollectionApi
): viewModel.InfoEpisodesCollectionVm => ({
  pages: info.pages,
});

const mapEpisode = (episode: string) => episode.slice(1, 3);

const mapSeason = (season: string) => season.slice(4);
