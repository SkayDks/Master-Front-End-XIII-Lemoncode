import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useEpisodesCollection } from './episodes-collection.hook';
import { EpisodesCollectionComponent } from './episodes-collection.component';
import { PaginationControlled } from 'common/components/pagination';

export const EpisodesCollectionContainer = () => {
  const { episodesCollection, infoCollection, loadEpisodesCollection } =
    useEpisodesCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadEpisodesCollection(1);
  }, []);

  const handleInfoEpisodes = (id: string) => {
    navigate(linkRoutes.infoEpisode(id));
  };
  const handleChangePage = (page: number)=>{
    loadEpisodesCollection(page);
  }

  return (
    <>
      <EpisodesCollectionComponent
        episodesCollection={episodesCollection}
        onInfoEpisodes={handleInfoEpisodes}    
      />
      <PaginationControlled pages={infoCollection.pages} onChangePage={handleChangePage}/>
    </>
  );
};
