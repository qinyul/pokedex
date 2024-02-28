import {COLOUR} from './styles';

export const ON_SCROLL_END_TIMEOUT = 500;
export const LANGUAGE_API_URI = 'https://pokeapi.co/api/v2/language/9/';
export const POKEMON_COMPARE_SLOT = {
  first: 1,
  second: 2,
};
export const APP_TITLE = 'POKEDEX';

export const MAIN_STACK_NAVIGATOR_OPTIONS = {
  headerStyle: {backgroundColor: COLOUR.mainRed},
  headerTitleStyle: {color: 'white'},
  title: APP_TITLE,
  headerLeft: () => null,
};
