import {useRoute} from '@react-navigation/native';
import {Divider} from '@rneui/themed';
import {Dimensions, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {POKE_CHART_BAR_COLOUR} from '../../constants/styles';
import {pokemonChartMapper} from '../../mapper/pokemon-chart-mapper';
import {PokeChartProps} from '../../types/components/poke-chart';
import {capitalizeFirstString} from '../../utils';
import {Typography} from '../typography/typography';
import styles from './styles';

export const PokeChart = ({
  firstPokemonData,
  secondPokemonData,
}: PokeChartProps) => {
  const screenHeight = Dimensions.get('window').height;
  const router = useRoute();
  const params = router.params as any;
  const firstPokemonName = params?.firstPokemonName ?? '';
  const secondPokemonName = params?.secondPokemonName ?? '';

  return (
    <View>
      <View>
        <Typography
          customStyle={styles.pokemonName}
          text={capitalizeFirstString(firstPokemonName)}
        />
        <Divider
          color={POKE_CHART_BAR_COLOUR.firstPokemon}
          width={10}
          style={{borderRadius: 10, width: '25%'}}
        />
      </View>
      <View>
        <Typography
          customStyle={styles.pokemonName}
          text={capitalizeFirstString(secondPokemonName)}
        />
        <Divider
          color={POKE_CHART_BAR_COLOUR.secondPokemon}
          width={10}
          style={{borderRadius: 10, width: '25%', marginBottom: 20}}
        />
      </View>

      <BarChart
        width={340}
        rotateLabel
        barWidth={40}
        spacing={40}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        noOfSections={6}
        yAxisTextStyle={{color: 'lightgray'}}
        barBorderRadius={5}
        height={screenHeight * 0.28}
        stackData={pokemonChartMapper(firstPokemonData, secondPokemonData)}
        gradientColor={'#009FFF'}
      />
    </View>
  );
};
