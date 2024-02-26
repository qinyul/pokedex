import {useRoute} from '@react-navigation/native';
import {Divider} from '@rneui/themed';
import {Dimensions, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {POKE_CHART_BAR_COLOUR} from '../../constants/styles';
import {pokemonChartMapper} from '../../mapper/pokemon-chart-mapper';
import {PokeChartProps} from '../../types/components/poke-chart';
import {Typography} from '../typography/typography';

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
        <Typography text={firstPokemonName} />
        <Divider
          color={POKE_CHART_BAR_COLOUR.firstPokemon}
          width={10}
          style={{borderRadius: 10, width: '25%'}}
        />
      </View>
      <View>
        <Typography text={secondPokemonName} />
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
        noOfSections={6}
        barBorderRadius={5}
        height={screenHeight * 0.28}
        stackData={pokemonChartMapper(firstPokemonData, secondPokemonData)}
      />
    </View>
  );
};
