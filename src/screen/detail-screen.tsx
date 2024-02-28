import {useRoute} from '@react-navigation/native';
import {Container} from '../components/container/container';
import {PokeDetail} from '../components/poke-detail';

export const DetailScreen = (): React.JSX.Element => {
  return (
    <Container>
      <PokeDetail />
    </Container>
  );
};
