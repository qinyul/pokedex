import axios from 'axios';

export const client = async (path = '', signal?: any) => {
  const res = await axios.get(`${process.env.POKEAPI_URL}/${path}`, {signal});
  return res;
};
