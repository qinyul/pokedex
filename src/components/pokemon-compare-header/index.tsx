import {Column} from '../column';
import {View} from 'react-native';
import {Button, Image} from '@rneui/themed';
import {IMAGE_SIZE_MD} from '../../constants/styles';
import styles from './styles';
import {BUTTON, ROUTE} from '../../constants/text-content';
import {useNavigation, useRoute} from '@react-navigation/native';
import {POKEMON_COMPARE_SLOT} from '../../constants/common';
import {Typography} from '../typography/typography';
import {capitalizeFirstString} from '../../utils';

export const PokemonCompareHeader = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const params = router.params as any;
  const firstSlotId = params?.firstSlotId ?? '';
  const firstPokemonName = params?.firstPokemonName ?? '';
  const secondSlotId = params?.secondSlotId ?? '';
  const secondPokemonName = params?.secondPokemonName ?? '';

  const handleSelectBtn = (slot: number) => {
    navigation.navigate(
      ROUTE.stack.pokemonList as never,
      {
        ...params,
        selectedSlot: slot,
      } as never,
    );
  };

  const pokemonImages = require.context(
    '../../../assets/pokemon',
    true,
    /\.png$/,
  );
  const firstImageKey =
    pokemonImages.keys().find(key => key === `./${firstSlotId}.png`) ?? '';

  const secondImageKey =
    pokemonImages.keys().find(key => key === `./${secondSlotId}.png`) ?? '';
  return (
    <Column customStyle={{marginTop: '10%'}}>
      <>
        <View>
          <Image
            style={{width: IMAGE_SIZE_MD, height: IMAGE_SIZE_MD}}
            source={
              firstImageKey
                ? pokemonImages(firstImageKey)
                : require('../../../assets/icon/pokeball.png')
            }
          />
          {firstPokemonName && (
            <Typography text={capitalizeFirstString(firstPokemonName)} />
          )}
          <Button
            style={styles.button}
            title={BUTTON.select}
            onPress={() => handleSelectBtn(POKEMON_COMPARE_SLOT.first)}
          />
        </View>
        <Image
          style={{width: IMAGE_SIZE_MD, height: IMAGE_SIZE_MD}}
          source={require('../../../assets/icon/vs.png')}
        />
        <View>
          <Image
            style={{width: IMAGE_SIZE_MD, height: IMAGE_SIZE_MD}}
            source={
              secondImageKey
                ? pokemonImages(secondImageKey)
                : require('../../../assets/icon/pokeball.png')
            }
          />
          {secondPokemonName && (
            <Typography text={capitalizeFirstString(secondPokemonName)} />
          )}
          <Button
            style={styles.button}
            title={BUTTON.select}
            onPress={() => handleSelectBtn(POKEMON_COMPARE_SLOT.second)}
          />
        </View>
      </>
    </Column>
  );
};
