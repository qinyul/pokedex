import React from 'react';
import {Card, Button} from '@rneui/themed';
import {Image, View} from 'react-native';
import {PokeCardProps} from '../../types/components/poke-card';
import {Typography} from '../typography/typography';
import {FONT_SIZE, IMAGE_SIZE} from '../../constants/styles';
import styles from './styles';
import {BUTTON, ROUTE} from '../../constants/text-content';
import {capitalizeFirstString, getPokemonId} from '../../utils';
import {useNavigation, useRoute} from '@react-navigation/native';
import {POKEMON_COMPARE_SLOT} from '../../constants/common';

export const PokeCard = ({pokemon}: PokeCardProps) => {
  const navigation = useNavigation();
  const router = useRoute();
  const id = getPokemonId(pokemon.url);
  const isPokemonListRoute = router.name === ROUTE.stack.pokemonList;

  const pokemonImages = require.context(
    '../../../assets/pokemon',
    true,
    /\.png$/,
  );
  const imageKey =
    pokemonImages.keys().find(key => key === `./${id}.png`) ?? '';

  const handleSelectPokemon = () => {
    const {selectedSlot} = router.params as never;
    navigation.navigate(
      ROUTE.stack.pokemonCompare as never,
      {
        ...router.params,
        ...(selectedSlot === POKEMON_COMPARE_SLOT.first && {
          firstSlotId: id,
          firstPokemonName: pokemon.name,
        }),
        ...(selectedSlot === POKEMON_COMPARE_SLOT.second && {
          secondSlotId: id,
          secondPokemonName: pokemon.name,
        }),
      } as never,
    );
  };

  const DetailButton = () => (
    <Button
      title={BUTTON.detail}
      size="sm"
      onPress={() =>
        navigation.navigate(
          ROUTE.stack.detail as never,
          {name: pokemon.name, id} as never,
        )
      }
    />
  );

  const SelectPokemonButton = () => (
    <Button
      title={BUTTON.select}
      size="sm"
      onPress={() => handleSelectPokemon()}
    />
  );

  return (
    <View>
      <Card>
        <Card.Title>
          <Typography
            text={capitalizeFirstString(pokemon.name)}
            customStyle={{fontSize: FONT_SIZE.cardTitle}}
          />
        </Card.Title>
        <Card.Divider />
        <View style={styles.contentContainer}>
          <Image
            source={pokemonImages(imageKey)}
            style={{width: IMAGE_SIZE, height: IMAGE_SIZE}}
          />
          {isPokemonListRoute ? <SelectPokemonButton /> : <DetailButton />}
        </View>
      </Card>
    </View>
  );
};
