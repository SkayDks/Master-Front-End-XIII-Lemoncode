import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyLocation, Location } from './location.vm';
import { mapLocationFromApiToVm } from './location.mappers';
import { LocationComponent } from './location.component';

export const LocationContainer: React.FunctionComponent = (props) => {
  const [location, setLocation] = React.useState<Location>(
    createEmptyLocation()
  );
  const { id } = useParams<{ id: string }>();

  const handleLoadLocation = async () => {
    const apiLocation = await api.getLocation(id);
    setLocation(mapLocationFromApiToVm(apiLocation));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadLocation();
    }
  }, []);

  return <LocationComponent location={location} />;
};
