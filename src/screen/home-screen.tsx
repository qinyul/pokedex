import {useRoute} from '@react-navigation/native';
import {Container} from '../components/container/container';
import {PokeList} from '../components/poke-list';
import {Typography} from '../components/typography/typography';
import {FONT_SIZE, FONT_WEIGHT} from '../constants/styles';
import {ROUTE, TITLE} from '../constants/text-content';

export const HomeScreen = (): React.JSX.Element => {
  const router = useRoute();
  const isPokemonListRoute = router.name === ROUTE.stack.pokemonList;
  return (
    <Container>
      <>
        {!isPokemonListRoute && (
          <Typography
            text={TITLE.home}
            customStyle={{
              fontWeight: FONT_WEIGHT.title,
              fontSize: FONT_SIZE.title,
            }}
          />
        )}
        <PokeList />
      </>
    </Container>
  );
};
