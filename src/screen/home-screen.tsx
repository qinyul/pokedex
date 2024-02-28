import {Container} from '../components/container/container';
import {PokeList} from '../components/poke-list';

export const HomeScreen = (): React.JSX.Element => {
  return (
    <Container>
      <PokeList />
    </Container>
  );
};
