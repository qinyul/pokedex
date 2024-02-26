import {useRoute} from '@react-navigation/native';
import {Container} from '../components/container/container';
import {PokeDetail} from '../components/poke-detail';
import {PokeList} from '../components/poke-list';
import {Typography} from '../components/typography/typography';
import {FONT_SIZE, FONT_WEIGHT} from '../constants/styles';
import {capitalizeFirstString} from '../utils';

export const DetailScreen = (): React.JSX.Element => {
  const route = useRoute();
  const {name} = route.params as never;

  return (
    <Container>
      <>
        <Typography
          text={capitalizeFirstString(name)}
          customStyle={{
            fontWeight: FONT_WEIGHT.title,
            fontSize: FONT_SIZE.title,
          }}
        />
        <PokeDetail />
      </>
    </Container>
  );
};
