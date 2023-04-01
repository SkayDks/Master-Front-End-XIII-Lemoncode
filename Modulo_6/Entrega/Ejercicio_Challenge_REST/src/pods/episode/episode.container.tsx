import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyEpisode, Episode } from './episode.vm';
import { mapEpisodeFromApiToVm } from './episode.mappers';
import { EpisodeComponent } from './episode.component';

export const EpisodeContainer: React.FunctionComponent = (props) => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const { id } = useParams<{ id: string }>();

  const handleLoadEpisode = async () => {
    const apiEpisode = await api.getEpisode(id);
    setEpisode(mapEpisodeFromApiToVm(apiEpisode));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadEpisode();
    }
  }, []);

  return <EpisodeComponent episode={episode} />;
};
