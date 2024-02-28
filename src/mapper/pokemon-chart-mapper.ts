import {PokemonDetail} from '../types/pokemon-detail';
import {stackDataItem} from 'react-native-gifted-charts';
import {Stats} from '../types/pokemon';
import {POKEMON_INFORMATION_COLUMN_NAMES} from '../constants/text-content';
import {POKE_CHART_BAR_COLOUR} from '../constants/styles';

const labelTextStyle = {color: 'lightgray'};
export const pokemonChartMapper = (
  firstPokemonData: Stats,
  secondPokemonData: Stats,
): stackDataItem[] => [
  {
    stacks: [
      {
        value: firstPokemonData.attack,
        color: POKE_CHART_BAR_COLOUR.firstPokemon,
      },
      {
        value: secondPokemonData.attack,
        color: POKE_CHART_BAR_COLOUR.secondPokemon,
      },
    ],
    label: POKEMON_INFORMATION_COLUMN_NAMES.attack,
    labelTextStyle,
  },
  {
    stacks: [
      {
        value: firstPokemonData.defense,
        color: POKE_CHART_BAR_COLOUR.firstPokemon,
      },
      {
        value: secondPokemonData.defense,
        color: POKE_CHART_BAR_COLOUR.secondPokemon,
      },
    ],
    label: POKEMON_INFORMATION_COLUMN_NAMES.defense,
    labelTextStyle,
  },
  {
    stacks: [
      {value: firstPokemonData.hp, color: POKE_CHART_BAR_COLOUR.firstPokemon},
      {
        value: secondPokemonData.hp,
        color: POKE_CHART_BAR_COLOUR.secondPokemon,
      },
    ],
    label: POKEMON_INFORMATION_COLUMN_NAMES.hp,
    labelTextStyle,
  },
  {
    stacks: [
      {
        value: firstPokemonData.specialAttack,
        color: POKE_CHART_BAR_COLOUR.firstPokemon,
      },
      {
        value: secondPokemonData.specialAttack,
        color: POKE_CHART_BAR_COLOUR.secondPokemon,
      },
    ],
    label: POKEMON_INFORMATION_COLUMN_NAMES.specialAttackShorthand,
    labelTextStyle,
  },
  {
    stacks: [
      {
        value: firstPokemonData.specialDefense,
        color: POKE_CHART_BAR_COLOUR.firstPokemon,
      },
      {
        value: secondPokemonData.specialDefense,
        color: POKE_CHART_BAR_COLOUR.secondPokemon,
      },
    ],
    label: POKEMON_INFORMATION_COLUMN_NAMES.specialDefenseShorthand,
    labelTextStyle,
  },
  {
    stacks: [
      {
        value: firstPokemonData.speed,
        color: POKE_CHART_BAR_COLOUR.firstPokemon,
      },
      {
        value: secondPokemonData.speed,
        color: POKE_CHART_BAR_COLOUR.secondPokemon,
      },
    ],
    label: POKEMON_INFORMATION_COLUMN_NAMES.defense,
    labelTextStyle,
  },
];
