import React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useLocationsCollection } from './locations-collection.hook';
import { LocationsCollectionComponent } from './locations-collection.component';
import { PaginationControlled } from 'common/components/pagination';
import { Filter } from 'common/components/filter';
import { footer } from './locations-collection.styles';

export const LocationsCollectionContainer = () => {
  const { locationsCollection, infoCollection, loadLocationsCollection } =
    useLocationsCollection();
  const navigate = useNavigate();

  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    loadLocationsCollection(1, filter);
  }, [filter]);

  const handleInfoLocation = (id: string) => {
    navigate(linkRoutes.infoLocation(id));
  };

  const handleChangeFilter = (filter: string) => {
    setFilter(filter);
  };

  const handleChangePage = (page: number) => {
    loadLocationsCollection(page, filter);
  };

  return (
    <>
      <LocationsCollectionComponent
        locationsCollection={locationsCollection}
        onInfoLocation={handleInfoLocation}
      />
      <div className={footer}>
        <PaginationControlled
          pages={infoCollection.pages}
          onChangePage={handleChangePage}
        />
        <Filter name="location" onChange={handleChangeFilter} />
      </div>
    </>
  );
};
