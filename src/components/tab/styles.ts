import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginVertical: 10,
  },
  itemInformationStatsContainer: {
    flexDirection: 'column',
    width: '95%',
    marginVertical: 5,
  },
  itemInformationColumn: {
    fontSize: 18,
  },
  itemInformationValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
