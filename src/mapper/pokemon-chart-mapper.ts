import {PokemonDetail} from '../types/pokemon-detail';
import {stackDataItem} from 'react-native-gifted-charts';
import {Stats} from '../types/pokemon';
import {POKEMON_INFORMATION_COLUMN_NAMES} from '../constants/text-content';
import {POKE_CHART_BAR_COLOUR} from '../constants/styles';

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
  },
];
