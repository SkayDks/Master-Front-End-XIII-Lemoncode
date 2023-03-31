import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  infoCharacter: string;
  locationsCollection: string;
  infoLocation: string;
  episodesCollection: string;
  infoEpisode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  infoCharacter: '/character/:id',
  locationsCollection: '/locations',
  infoLocation: '/location/:id',
  episodesCollection: '/episodes',
  infoEpisode: '/episode/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'infoCharacter' | 'infoLocation' | 'infoEpisode'> {
  infoCharacter: NavigationFunction;
  infoLocation: NavigationFunction;
  infoEpisode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  infoCharacter: (id) => generatePath(switchRoutes.infoCharacter, { id }),
  infoLocation: (id) => generatePath(switchRoutes.infoLocation, { id }),
  infoEpisode: (id) => generatePath(switchRoutes.infoEpisode, { id }),
};
