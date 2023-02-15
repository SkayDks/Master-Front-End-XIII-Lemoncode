import { getNameColletcion } from 'name-api';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <li key={name}>
          <Link to={`/users/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
