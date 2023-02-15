import { getNameColletcion } from 'name-api';
import React from 'react';

interface Props {
  initialNameCollection?: string[];
}

export const NameCollection: React.FunctionComponent<Props> = (props) => {
  const [nameCollection, setNameColection] = React.useState(
    props.initialNameCollection || []
  );

  React.useEffect(() => {
    getNameColletcion().then((names) => {
      setNameColection(names);
    });
  }, []);
  return (
    <ul>
      {nameCollection.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
