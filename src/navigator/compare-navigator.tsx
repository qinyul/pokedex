import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE} from '../constants/text-content';
import {CompareScreen} from '../screen/compare-screen';

export const CompareNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE.stack.compare} component={CompareScreen} />
    </Stack.Navigator>
  );
};
