import {PokemonDetail} from '../types/pokemon-detail';

export const pokemonStatsMapper = ({stats}: PokemonDetail) => ({
  hp: stats[0].base_stat,
  attack: stats[1].base_stat,
  defense: stats[2].base_stat,
  specialAttack: stats[1].base_stat,
  specialDefense: stats[1].base_stat,
  speed: stats[1].base_stat,
});
