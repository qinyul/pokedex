export interface PokemonRoot {
  name: string;
  url: string;
}

export interface PokemonResponse {
  data: PokemonRoot[];
  next: string | undefined;
}

export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface AbilityDescription {
  effect: string;
  language: PokemonRoot;
  short_effect: string;
}
