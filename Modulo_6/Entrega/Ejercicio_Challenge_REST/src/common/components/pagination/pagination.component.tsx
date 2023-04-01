import React from 'react';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as classes from './pagination.styles';
import { CenteredLayout } from 'layouts';

interface Props extends PaginationProps {
  pages: number;
  onChangePage: (page: number) => void;
}

export const PaginationControlled: React.FunctionComponent<Props> = (props) => {
  const { pages, onChangePage } = props;
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    onChangePage(value);
  };

  return (
    <Stack className={classes.container}>
      <CenteredLayout>
        <Pagination
          count={pages}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </CenteredLayout>
    </Stack>
  );
};
