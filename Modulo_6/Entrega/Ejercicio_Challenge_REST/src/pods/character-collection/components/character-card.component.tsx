import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import CardActionArea from '@mui/material/CardActionArea';

interface Props {
  character: CharacterEntityVm;
  onInfoCharacter: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onInfoCharacter } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onInfoCharacter(character.id)}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: '100px', textTransform: 'capitalize' }}
              aria-label="character"
            >
              {character.status}
            </Avatar>
          }
          title={character.name}
          subheader={character.location}
        />
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.picture}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <Typography variant="subtitle1" gutterBottom>
              {`Gender: ${character.description.gender} //   
              Specie: ${character.description.species}`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {`Another tips: ${character.description.type}`}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
