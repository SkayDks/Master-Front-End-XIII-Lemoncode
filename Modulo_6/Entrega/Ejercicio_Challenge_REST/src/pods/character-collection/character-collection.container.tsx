import React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { PaginationControlled } from 'common/components/pagination';
import { Filter } from 'common/components/filter';
import { footer } from './character-collection.styles';

export const CharacterCollectionContainer = () => {
  const { characterCollection, infoCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    loadCharacterCollection(1, filter);
  }, [filter]);

  const handleInfoCharacter = (id: string) => {
    navigate(linkRoutes.infoCharacter(id));
  };

  const handleChangeFilter = (filter: string) => {
    setFilter(filter);
  };

  const handleChangePage = (page: number) => {
    loadCharacterCollection(page, filter);
  };

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onInfoCharacter={handleInfoCharacter}
      />
      <div className={footer}>
        <PaginationControlled
          pages={infoCollection.pages}
          onChangePage={handleChangePage}
        />
        <Filter name="character" onChange={handleChangeFilter} />
      </div>
    </>
  );
};
