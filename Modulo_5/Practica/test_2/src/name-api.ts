import Axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/user';

export const getNameColletcion = (): Promise<string[]> =>
  Axios.get(url).then(({ data }) => data.map((user) => user.name));
