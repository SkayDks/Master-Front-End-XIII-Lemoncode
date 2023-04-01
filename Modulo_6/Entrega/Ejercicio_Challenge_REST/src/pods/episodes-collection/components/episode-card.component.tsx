import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { EpisodesEntityVm } from '../episodes-collection.vm';
import * as classes from './episode-card.styles';
import CardActionArea from '@mui/material/CardActionArea';

interface Props {
  episodes: EpisodesEntityVm;
  onInfoEpisodes: (id: string) => void;
}

export const EpisodesCard: React.FunctionComponent<Props> = (props) => {
  const { episodes, onInfoEpisodes } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onInfoEpisodes(episodes.id)}>
        <CardHeader title={episodes.name} />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="subtitle1" gutterBottom>
              {`Season: ${episodes.season},
                Episode: ${episodes.episode}`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {`Air Date: ${episodes.airDate}`}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
