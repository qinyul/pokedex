import {useState} from 'react';
import {useFetch} from '../../hooks/use-fetch';
import {PokemonResponse} from '../../types/pokemon';
import {PokeCard} from '../poke-card';
import {ScrollView} from '../scrollview';

export const PokeList = () => {
  const [pokemons, setPokemons] = useState<PokemonResponse>({
    data: [],
    next: undefined,
  });
  const [isReachPageEnd, setIsReachPageEnd] = useState(false);
  const getNextPath = (uri: string) => uri.split('/')?.[5] ?? '';

  const getPokemons = (res: any) => {
    setIsReachPageEnd(false);
    setPokemons({
      data: [...pokemons.data, ...res.data.results],
      next: getNextPath(res.data.next),
    });
  };
  useFetch(getPokemons, [isReachPageEnd], pokemons?.next);

  return (
    <ScrollView onReachEnd={() => setIsReachPageEnd(true)}>
      <>
        {pokemons &&
          pokemons.data.length > 0 &&
          pokemons.data.map((pokemon, i) => (
            <PokeCard key={i} pokemon={pokemon} />
          ))}
      </>
    </ScrollView>
  );
};
