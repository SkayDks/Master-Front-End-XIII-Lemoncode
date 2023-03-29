import { CharacterEntityApi, DataCharacter } from './character.api-model';
import { Lookup } from 'common/models';
import { mockStatus } from './character.mock-data';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const query = gql`
  query {    
    character(id:${id}){    
      id
      name
      status
      type
      image
      species
      gender
      location {
        name
      }
    }      
  }`;
  const { character } = await graphQLClient.request<DataCharacter>(query);

  return character;
};

export const getStatus = async (): Promise<Lookup[]> => {
  return mockStatus;
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  return true;
};
