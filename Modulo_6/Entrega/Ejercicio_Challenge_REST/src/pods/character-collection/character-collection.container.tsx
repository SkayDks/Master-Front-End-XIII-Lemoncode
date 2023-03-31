import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { PaginationControlled } from 'common/components/pagination';

export const CharacterCollectionContainer = () => {
  const { characterCollection, infoCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(1);
  }, []);

  const handleInfoCharacter = (id: string) => {
    navigate(linkRoutes.infoCharacter(id));
  };
  const handleChangePage = (page: number)=>{
    loadCharacterCollection(page);
  }

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onInfoCharacter={handleInfoCharacter}    
      />
      <PaginationControlled pages={infoCollection.pages} onChangePage={handleChangePage}/>
    </>
  );
};
