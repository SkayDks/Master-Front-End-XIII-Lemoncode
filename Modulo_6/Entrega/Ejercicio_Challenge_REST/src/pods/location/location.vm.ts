export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
}

export const createEmptyLocation = (): Location => ({
  id: '',
  name: '',
  type: '',
  dimension: '',
});
