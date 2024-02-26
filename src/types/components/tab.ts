import {Stats} from '../pokemon';
import {PokemonDetail} from '../pokemon-detail';

export interface PokemonInformationTabProps {
  height: number;
  weight: number;
  types: string[];
}

export interface PokemonStatsTabProps {
  stats: Stats;
}

export interface Ability {
  name: string;
  url: string;
}
export interface PokemonAbilitiesTabProps {
  abilities: Ability[];
}
