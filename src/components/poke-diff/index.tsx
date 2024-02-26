import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {PokemonCompareHeader} from '../pokemon-compare-header';
import {useRoute} from '@react-navigation/native';
import {PokemonCompareBody} from '../pokemon-compare-body';
import {Container} from '../container/container';

export const PokeDiff = () => {
  const router = useRoute();
  const params = router.params as any;
  const firstSlotId = params?.firstSlotId ?? '';
  const secondSlotId = params?.secondSlotId ?? '';
  return (
    <Container>
      <>
        <PokemonCompareHeader />
        {firstSlotId.length > 0 && secondSlotId.length > 0 && (
          <PokemonCompareBody />
        )}
      </>
    </Container>
  );
};
