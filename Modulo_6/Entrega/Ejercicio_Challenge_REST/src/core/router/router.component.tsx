import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  CharacterScene,
  LocationsCollectionScene,
  EpisodesCollectionScene,
  LocationScene,
  EpisodeScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.infoCharacter} element={<CharacterScene />} />
        <Route
          path={switchRoutes.locationsCollection}
          element={<LocationsCollectionScene />}
        />
        <Route path={switchRoutes.infoLocation} element={<LocationScene />} />
        <Route
          path={switchRoutes.episodesCollection}
          element={<EpisodesCollectionScene />}
        />
        <Route path={switchRoutes.infoEpisode} element={<EpisodeScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
