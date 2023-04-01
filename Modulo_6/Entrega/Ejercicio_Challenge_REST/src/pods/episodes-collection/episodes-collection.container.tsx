import React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useEpisodesCollection } from './episodes-collection.hook';
import { EpisodesCollectionComponent } from './episodes-collection.component';
import { PaginationControlled } from 'common/components/pagination';
import { Filter } from 'common/components/filter';
import { footer } from './episodes-collection.styles';

export const EpisodesCollectionContainer = () => {
  const { episodesCollection, infoCollection, loadEpisodesCollection } =
    useEpisodesCollection();
  const navigate = useNavigate();

  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    loadEpisodesCollection(1, filter);
  }, [filter]);

  const handleInfoEpisodes = (id: string) => {
    navigate(linkRoutes.infoEpisode(id));
  };

  const handleChangeFilter = (filter: string) => {
    setFilter(filter);
  };

  const handleChangePage = (page: number) => {
    loadEpisodesCollection(page, filter);
  };

  return (
    <>
      <EpisodesCollectionComponent
        episodesCollection={episodesCollection}
        onInfoEpisodes={handleInfoEpisodes}
      />
      <div className={footer}>
        <PaginationControlled
          pages={infoCollection.pages}
          onChangePage={handleChangePage}
        />
        <Filter name="episode" onChange={handleChangeFilter} />
      </div>
    </>
  );
};
