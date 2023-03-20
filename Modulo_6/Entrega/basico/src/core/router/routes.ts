import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  infoCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/characters/edit/:id',
  infoCharacter: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'editCharacter' | 'infoCharacter'> {
  editCharacter: NavigationFunction;
  infoCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  infoCharacter: (id) => generatePath(switchRoutes.infoCharacter, { id }),
};
