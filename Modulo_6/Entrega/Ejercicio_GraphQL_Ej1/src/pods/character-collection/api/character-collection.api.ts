import { FullCharacterEntityApi } from './character-collection.api-model';
import { CharacterEntityApi } from 'pods/character/api';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
  query {
    characters(page: 2) {
      results {
      id,
      name,
      status,
      type
      image,
      species,
      gender,
        location{name}
      }
    }
  }`;
  const { characters } = await graphQLClient.request<FullCharacterEntityApi>(
    query
  );

  return characters.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  //characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
