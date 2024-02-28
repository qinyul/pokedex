import {useRoute} from '@react-navigation/native';
import {lazy, useState, Suspense} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native';
import {
  FONT_SIZE,
  FONT_WEIGHT,
  IMAGE_SIZE,
  POKEMON_BG_COLOURS,
} from '../../constants/styles';
import {useFetch} from '../../hooks/use-fetch';
import {PokemonResponse} from '../../types/pokemon';
import {PokemonDetail} from '../../types/pokemon-detail';
import {capitalizeFirstString} from '../../utils';
import {PokeCard} from '../poke-card';
import {PokeDetailCard} from '../poke-detail-card';
import {ScrollView} from '../scrollview';
import {Typography} from '../typography/typography';
import styles from './styles';

export const PokeDetail = () => {
  const [pokemon, setPokemon] = useState<PokemonDetail | undefined>(undefined);

  const router = useRoute();
  const {id} = router.params as never;

  const pokemonDreamWorldSprites = require.context(
    '../../../assets/pokemon/dream-world',
    true,
    /\.svg$/,
  );
  const dreamWorldKey =
    pokemonDreamWorldSprites.keys().find(key => key === `./${id}.svg`) ?? '';

  const pokemonFrontSpirites = require.context(
    '../../../assets/pokemon',
    true,
    /\.png$/,
  );
  const frontKey =
    pokemonFrontSpirites.keys().find(key => key === `./${id}.png`) ?? '';

  const pokemonBackSpirites = require.context(
    '../../../assets/pokemon/back',
    true,
    /\.png$/,
  );
  const backKey =
    pokemonBackSpirites.keys().find(key => key === `./${id}.png`) ?? '';

  const getPokemons = (res: any) => {
    setPokemon(res.data);
  };
  useFetch(getPokemons, [], `${process.env.POKEAPI_POKEMON_PATH}/${id}`);

  const types = pokemon?.types.map(type => type.type.name);
  const mainType = types?.[0] as keyof typeof POKEMON_BG_COLOURS;

  return (
    <ScrollView>
      <>
        <View
          style={{
            backgroundColor: POKEMON_BG_COLOURS[mainType],
            borderBottomStartRadius: 30,
            borderBottomEndRadius: 30,
          }}>
          <Typography
            text={capitalizeFirstString(pokemon?.name ?? '')}
            customStyle={{
              fontWeight: FONT_WEIGHT.title,
              fontSize: FONT_SIZE.title,
            }}
          />
          {pokemonDreamWorldSprites(dreamWorldKey).default()}
          <View style={styles.detailImageContainer}>
            <Image
              source={pokemonFrontSpirites(frontKey)}
              style={{width: IMAGE_SIZE, height: IMAGE_SIZE}}
            />
            <Image
              source={pokemonBackSpirites(backKey)}
              style={{width: IMAGE_SIZE, height: IMAGE_SIZE}}
            />
          </View>
        </View>
        {pokemon && <PokeDetailCard pokemon={pokemon} />}
      </>
    </ScrollView>
  );
};
