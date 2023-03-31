import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useLocationsCollection } from './locations-collection.hook';
import { LocationsCollectionComponent } from './locations-collection.component';
import { PaginationControlled } from 'common/components/pagination';

export const LocationsCollectionContainer = () => {
  const { locationsCollection, infoCollection, loadLocationsCollection } =
    useLocationsCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadLocationsCollection(1);
  }, []);

  const handleInfoLocation = (id: string) => {
    navigate(linkRoutes.infoLocation(id));
  };
  const handleChangePage = (page: number)=>{
    loadLocationsCollection(page);
  }

  return (
    <>
      <LocationsCollectionComponent
        locationsCollection={locationsCollection}
        onInfoLocation={handleInfoLocation}    
      />
      <PaginationControlled pages={infoCollection.pages} onChangePage={handleChangePage}/>
    </>
  );
};
