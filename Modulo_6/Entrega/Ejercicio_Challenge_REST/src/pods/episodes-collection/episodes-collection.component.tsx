import React from 'react';
import { EpisodesEntityVm } from './episodes-collection.vm';
import { EpisodesCard } from './components/episode-card.component';
import * as classes from './episodes-collection.styles';

interface Props {
  episodesCollection: EpisodesEntityVm[];
  onInfoEpisodes: (id: string) => void;
}

export const EpisodesCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodesCollection, onInfoEpisodes } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodesCollection.map((episodes) => (
          <li key={episodes.id}>
            <EpisodesCard episodes={episodes} onInfoEpisodes={onInfoEpisodes} />
          </li>
        ))}
      </ul>
    </div>
  );
};
