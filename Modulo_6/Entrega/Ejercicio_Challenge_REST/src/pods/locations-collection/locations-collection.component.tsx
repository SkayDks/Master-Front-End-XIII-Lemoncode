import * as React from 'react';
import { LocationsEntityVm } from './locations-collection.vm';
import { LocationCard } from './components/location-card.component';
import * as classes from './locations-collection.styles';

interface Props {
  locationsCollection: LocationsEntityVm[];
  onInfoLocation: (id: string) => void;
}

export const LocationsCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationsCollection, onInfoLocation } = props;

  return (
      <div className={classes.root}>
        <ul className={classes.list}>
          {locationsCollection.map((locations) => (
            <li key={locations.id}>
              <LocationCard
                locations={locations}
                onInfoLocation={onInfoLocation}
              />
            </li>
          ))}
        </ul>
      </div>
  );
};
