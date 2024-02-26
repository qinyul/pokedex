import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {View} from 'react-native';
import {useFetch} from '../../hooks/use-fetch';
import {pokemonStatsMapper} from '../../mapper/pokemon-stats-mapper';
import {Stats} from '../../types/pokemon';
import {PokeChart} from '../poke-chart';

export const PokemonCompareBody = () => {
  const router = useRoute();
  const params = router.params as any;
  const [firstPokemonData, setfirstPokemonData] = useState<Stats | undefined>(
    undefined,
  );
  const [secondPokemonData, setSecondPokemonData] = useState<Stats | undefined>(
    undefined,
  );
  const firstSlotId = params?.firstSlotId ?? '';
  const secondSlotId = params?.secondSlotId ?? '';

  const handleFirstSlotPokemon = (res: any) => {
    setfirstPokemonData(pokemonStatsMapper(res.data));
  };

  const handleSecondSlotPokemon = (res: any) => {
    setSecondPokemonData(pokemonStatsMapper(res.data));
  };

  useFetch(
    handleFirstSlotPokemon,
    [firstSlotId],
    `${process.env.POKEAPI_POKEMON_PATH}/${firstSlotId}`,
  );
  useFetch(
    handleSecondSlotPokemon,
    [secondSlotId],
    `${process.env.POKEAPI_POKEMON_PATH}/${secondSlotId}`,
  );
  return (
    <View style={{marginTop: 20}}>
      {firstPokemonData && secondPokemonData && (
        <PokeChart
          firstPokemonData={firstPokemonData}
          secondPokemonData={secondPokemonData}
        />
      )}
    </View>
  );
};
