import {PokemonCompare} from '../components/pokemon-compare';
import {Typography} from '../components/typography/typography';
import {FONT_SIZE, FONT_WEIGHT} from '../constants/styles';
import {TITLE} from '../constants/text-content';

export const CompareScreen = (): React.JSX.Element => {
  return (
    <>
      <Typography
        text={TITLE.compare}
        customStyle={{
          fontWeight: FONT_WEIGHT.title,
          fontSize: FONT_SIZE.title,
        }}
      />
      <PokemonCompare />
    </>
  );
};
