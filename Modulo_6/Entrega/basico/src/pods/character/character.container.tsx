import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapcharacterFromApiToVm, mapcharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setcharacter] = React.useState<Character>(createEmptyCharacter());
  const [status, setStatus] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadStatusCollection = async () => {
    const apiStatus = await api.getStatus();
    setStatus(apiStatus);
  };

  const handleLoadcharacter = async () => {
    const apicharacter = await api.getcharacter(id);
    setcharacter(mapcharacterFromApiToVm(apicharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadcharacter();
    }
    handleLoadStatusCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apicharacter = mapcharacterFromVmToApi(character);
    const success = await api.savecharacter(apicharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} status={status} onSave={handleSave} />;
};
