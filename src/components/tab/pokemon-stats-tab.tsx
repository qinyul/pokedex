import {View} from 'react-native';
import {Typography} from '../typography/typography';
import {PokemonStatsTabProps} from '../../types/components/tab';
import styles from './styles';
import * as Progress from 'react-native-progress';
import {POKEMON_INFORMATION_COLUMN_NAMES} from '../../constants/text-content';

export const PokemonStatsTab = ({stats}: PokemonStatsTabProps) => {
  const {attack, defense, specialAttack, specialDefense, speed} = stats;
  return (
    <View style={{marginTop: 10}}>
      <View style={styles.itemInformationStatsContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.attack}
          customStyle={styles.itemInformationColumn}
        />
        <Progress.Bar
          progress={attack / 100}
          width={300}
          height={25}
          animated
        />
      </View>
      <View style={styles.itemInformationStatsContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.defense}
          customStyle={styles.itemInformationColumn}
        />
        <Progress.Bar
          progress={defense / 100}
          width={300}
          height={25}
          animated
        />
      </View>
      <View style={styles.itemInformationStatsContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.specialAttack}
          customStyle={styles.itemInformationColumn}
        />
        <Progress.Bar progress={specialAttack / 100} width={300} height={25} />
      </View>
      <View style={styles.itemInformationStatsContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.specialDefense}
          customStyle={styles.itemInformationColumn}
        />
        <Progress.Bar progress={specialDefense / 100} width={300} height={25} />
      </View>
      <View style={styles.itemInformationStatsContainer}>
        <Typography
          text={POKEMON_INFORMATION_COLUMN_NAMES.speed}
          customStyle={styles.itemInformationColumn}
        />
        <Progress.Bar progress={speed / 100} width={300} height={25} />
      </View>
    </View>
  );
};
