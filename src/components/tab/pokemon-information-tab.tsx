import {View} from 'react-native';
import {Typography} from '../typography/typography';
import {PokemonInformationTabProps} from '../../types/components/tab';
import styles from './styles';
import {POKEMON_INFORMATION_COLUMN_NAMES} from '../../constants/text-content';

export const PokemonInformationTab = ({
  height,
  weight,
  types,
}: PokemonInformationTabProps) => {
  return (
    <View style={{marginTop: 10}}>
      <View style={styles.itemInformationContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.height}
          customStyle={styles.itemInformationColumn}
        />
        <Typography text={height} customStyle={styles.itemInformationValue} />
      </View>
      <View style={styles.itemInformationContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.weight}
          customStyle={styles.itemInformationColumn}
        />
        <Typography text={weight} customStyle={styles.itemInformationValue} />
      </View>
      <View style={styles.itemInformationContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.types}
          customStyle={styles.itemInformationColumn}
        />
        <Typography
          text={types.join(',')}
          customStyle={styles.itemInformationValue}
        />
      </View>
    </View>
  );
};
