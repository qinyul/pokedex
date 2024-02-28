import {StyleSheet} from 'react-native';
import {COLOUR} from '../../constants/styles';

export default StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: COLOUR.mainRed,
    borderWidth: 0,
    borderRadius: 20,
    margin: 8,
  },
});
