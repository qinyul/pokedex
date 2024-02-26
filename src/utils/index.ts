export const getPokemonId = (url: string) =>
  url
    .split('/')
    .filter(it => it.length > 0)
    .pop();

export const capitalizeFirstString = (s: string) =>
  s.length > 0 ? s[0].toUpperCase() + s.slice(1) : '';
