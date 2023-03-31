import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { LocationsEntityVm } from '../locations-collection.vm';
import * as classes from './location-card.styles';
import CardActionArea from '@mui/material/CardActionArea';

interface Props {
  locations: LocationsEntityVm;
  onInfoLocation: (id: string) => void;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { locations, onInfoLocation } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onInfoLocation(locations.id)}>
        <CardHeader title={locations.name} subheader={locations.type} />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="subtitle1" gutterBottom>
              {`Dimension: ${locations.dimension}`}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
