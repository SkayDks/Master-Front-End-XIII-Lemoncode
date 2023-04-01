import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const root = css`
  margin: 2rem;
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const footer = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  bottom: 0px;
  background: white;
`;
