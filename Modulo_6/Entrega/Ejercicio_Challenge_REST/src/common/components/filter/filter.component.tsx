import React from 'react';
import { useDebounce } from 'use-debounce';
import { TextField } from '@mui/material';
import * as classes from './filter.styles';

interface TextFieldProps {
  name: string;
  onChange: (text: string) => void;
}

export const Filter: React.FunctionComponent<TextFieldProps> = (props) => {
  const { name, onChange } = props;
  const [filter, setFilter] = React.useState('');

  const [debounceFIlter] = useDebounce(filter, 1000);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };
  React.useEffect(() => {
    onChange(filter);
  }, [debounceFIlter]);

  return (
    <div className={classes.filter}>
      <TextField
        id="outlined-basic"
        label={`Search ${name}`}
        variant="outlined"
        value={filter}
        size="small"
        onChange={handleChange}
      />
    </div>
  );
};
